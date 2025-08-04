import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "@config/db"; // Assuming prisma is exported from here

export async function register(
  email: string,
  password: string,
  username: string
) {
  let user = await prisma.user.findUnique({ where: { email } });
  if (user) {
    // L'utente esiste già (magari da Google), aggiungi solo l'account 'credentials'
    const existingAccount = await prisma.account.findUnique({
      where: {
        provider_providerAccountId: {
          provider: "credentials",
          providerAccountId: email,
        },
      },
    });
    if (existingAccount) {
      throw new Error("User already exists");
    }
    await prisma.account.create({
      data: {
        type: "credentials",
        provider: "credentials",
        providerAccountId: email,
        hashedPassword: await bcrypt.hash(password, 10),
        userId: user.id,
      },
    });
    return user;
  } else {
    // Crea nuovo utente e account
    user = await prisma.user.create({
      data: {
        email,
        name: username,
        accounts: {
          create: {
            type: "credentials",
            provider: "credentials",
            providerAccountId: email,
            hashedPassword: await bcrypt.hash(password, 10),
          },
        },
      },
    });
    return user;
  }
}

export async function login(email: string, password: string, deviceId: string) {
  const account = await prisma.account.findUnique({
    where: {
      provider_providerAccountId: {
        provider: "credentials",
        providerAccountId: email,
      },
    },
    include: { user: true },
  });

  if (!account || !account.hashedPassword) {
    throw new Error("Invalid credentials");
  }

  const valid = await bcrypt.compare(password, account.hashedPassword);
  if (!valid) {
    throw new Error("Invalid credentials");
  }
  if (!account.user.emailVerified) {
    throw new Error("Email not verified");
  }

  // Elimina eventuali sessioni precedenti per lo stesso userId+deviceId
  await prisma.session.deleteMany({
    where: {
      userId: account.user.id,
      deviceId: deviceId,
    },
  });
  
  // Crea una nuova sessione (sessionToken viene generato automaticamente)
  const session = await prisma.session.create({
    data: {
      userId: account.user.id,
      deviceId: deviceId,
      accountId: account.id,
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
  });
  // Genera i token con sessionId

  const token = generateToken({
    userId: account.user.id,
    email: account.user.email,
    name: account.user.name,
    sessionId: session.id,
    deviceId: deviceId,
  });
  const refreshToken = generateRefreshToken({userId: account.user.id, sessionId: session.id, deviceId: deviceId});

  return { token, refreshToken, sessionId: session.id, user: account.user };
}

export async function refreshToken(refreshToken: string, sessionId?: string) {
  const session = await prisma.session.findUnique({
    where: { id: sessionId },
  });
  if (!session) {
    throw new Error("Invalid session");
  }

  const decoded = jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET as string
  ) as any;
  if (!decoded || !decoded.userId) {
    throw new Error("Invalid refresh token");
  }

  // Usa il deviceId decodificato dal token se non passato esplicitamente
  //verifica se la sessione non è scaduta
  if (new Date(session.expires) <= new Date()) {
    throw new Error("Session expired");
  }
  const user = await prisma.user.findUnique({ where: { id: decoded.userId } });
  if (!user) {
    throw new Error("User not found");
  }

  return generateToken({
    userId: user.id,
    user,
    email: user.email,
    name: user.name,
    sessionId: session.id,
  });
}

export async function findOrCreateGoogleUser(profile: any, deviceId?: string) {
  // Cerca account Google esistente
  let account = await prisma.account.findUnique({
    where: {
      provider_providerAccountId: {
        provider: "google",
        providerAccountId: profile.id,
      },
    },
    include: { user: true },
  });

  let user;

  if (account) {
    // Account Google esistente
    user = account.user;
  } else {
    // Se esiste già un utente con la stessa email, collega l'account Google
    user = await prisma.user.findUnique({
      where: { email: profile.emails[0].value },
    });

    if (user) {
      // Utente esiste, crea solo l'account Google
      account = await prisma.account.create({
        data: {
          type: "oauth",
          provider: "google",
          providerAccountId: profile.id,
          userId: user.id,
        },
        include: { user: true },
      });
    } else {
      // Crea nuovo utente con account Google
      user = await prisma.user.create({
        data: {
          email: profile.emails[0].value,
          name: profile.displayName,
          image: profile.photos?.[0]?.value,
          emailVerified: true, // Google OAuth verifica automaticamente l'email
          emailVerifiedData: new Date(),
          accounts: {
            create: {
              type: "oauth",
              provider: "google",
              providerAccountId: profile.id,
            },
          },
        },
        include: {
          accounts: {
            include: { user: true },
          },
        },
      });
      account = user.accounts[0];
    }
  }

  if (!account) {
    throw new Error("Failed to create or find Google account");
  }

  // Se non c'è deviceId, restituisci solo l'utente (per la strategia Passport)
  if (!deviceId) {
    return user;
  }

  // Se c'è deviceId, gestisci le sessioni complete (per il controller)
  // Elimina eventuali sessioni precedenti per lo stesso userId+deviceId
  await prisma.session.deleteMany({
    where: {
      userId: user.id,
      deviceId: deviceId,
    },
  });

  // Crea una nuova sessione
  const session = await prisma.session.create({
    data: {
      userId: user.id,
      deviceId: deviceId,
      accountId: account.id,
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
  });

  // Genera i token con sessionId
  const token = generateToken({
    userId: user.id,
    email: user.email,
    name: user.name,
    sessionId: session.id,
    deviceId: deviceId,
  });
  
  const refreshToken = generateRefreshToken({
    userId: user.id, 
    sessionId: session.id, 
    deviceId: deviceId
  });

  return { 
    token, 
    refreshToken, 
    sessionId: session.id, 
    user 
  };
}

export function generateToken(payload: any) {
  return jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: "15m",
  });
}

export function generateRefreshToken(payload:any) {
  return jwt.sign(
    payload,
    process.env.REFRESH_TOKEN_SECRET as string,
    { expiresIn: "7d" }
  );
}
