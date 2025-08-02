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
    if (existingAccount) throw new Error("User already exists");
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

  if (!account || !account.hashedPassword)
    throw new Error("Invalid credentials");

  const valid = await bcrypt.compare(password, account.hashedPassword);
  if (!valid) throw new Error("Invalid credentials");
  if (!account.user.emailVerified) throw new Error("Email not verified");

  // Elimina eventuali sessioni precedenti per lo stesso userId+deviceId
  await prisma.session.deleteMany({
    where: {
      userId: account.user.id,
      deviceId: deviceId,
    },
  });
  // Crea la sessione con sessionToken vuoto
  const session = await prisma.session.create({
    data: {
      sessionToken: "",
      userId: account.user.id,
      deviceId: deviceId,
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
  });
  // Genera i token con sessionId

  const token = generateToken({
    userId: account.user.id,
    email: account.user.email,
    name: account.user.name,
    sessionId: session.id,
  });
  const refreshToken = generateRefreshToken(account.user.id, session.id);
  // Aggiorna la sessione con il vero sessionToken (refreshToken)
  await prisma.session.update({
    where: { id: session.id },
    data: { sessionToken: refreshToken },
  });
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

  const user = await prisma.user.findUnique({ where: { id: decoded.userId } });
  if (!user) throw new Error("User not found");

  const token = generateToken({
    userId: user.id,
    user,
    email: user.email,
    name: user.name,
    sessionId: session.id,
  });

  return token;
}

export async function findOrCreateGoogleUser(profile: any) {
  let account = await prisma.account.findUnique({
    where: {
      provider_providerAccountId: {
        provider: "google",
        providerAccountId: profile.id,
      },
    },
    include: { user: true },
  });
  // Cerca account Google
  if (account) return account.user;

  // Se esiste già un utente con la stessa email, collega l'account Google
  let userExist = await prisma.user.findUnique({
    where: { email: profile.emails[0].value },
  });
  if (userExist) {
    await prisma.account.create({
      data: {
        type: "oauth",
        provider: "google",
        providerAccountId: profile.id,
        userId: userExist.id,
      },
    });
  } else {
    userExist = await prisma.user.create({
      data: {
        email: profile.emails[0].value,
        name: profile.displayName,
        image: profile.photos?.[0]?.value,
        accounts: {
          create: {
            type: "oauth",
            provider: "google",
            providerAccountId: profile.id,
          },
        },
      },
    });
  }
  return userExist;

}

export function generateToken(payload: any) {
  return jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: "15m",
  });
}

export function generateRefreshToken(userId: string, deviceId: string) {
  return jwt.sign(
    { userId, deviceId },
    process.env.REFRESH_TOKEN_SECRET as string,
    { expiresIn: "7d" }
  );
}
