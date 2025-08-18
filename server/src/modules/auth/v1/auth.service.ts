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

// Funzione helper per gestire le sessioni
async function findOrCreateSession(
  userId: string,
  deviceId: string,
  accountId: string
) {
  // Usa transazione per evitare race conditions
  return await prisma.$transaction(async (tx) => {
    // Cerca sessione esistente
    const existingSession = await tx.session.findFirst({
      where: {
        userId: userId,
        deviceId: deviceId,
      },
    });

    if (existingSession) {
      // Se la sessione esiste e non è scaduta, restituiscila
      if (existingSession.expires > new Date()) {
        return existingSession;
      }

      // Se è scaduta, aggiornala con nuova scadenza
      return await tx.session.update({
        where: { id: existingSession.id },
        data: {
          expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 giorni
          accountId: accountId, // Assicurati che sia collegata all'account corretto
        },
      });
    } else {
      // Crea una nuova sessione solo se non esiste
      return await tx.session.create({
        data: {
          userId: userId,
          deviceId: deviceId,
          accountId: accountId,
          expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 giorni
        },
      });
    }
  });
}
export async function verifyToken(
  token: string
): Promise<{ 
  valid: boolean; 
  expired: boolean; 
  data?: { userId: string; sessionId: string; deviceId: string };
  error?: string;
}> {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    
    // Token valido
    return {
      valid: true,
      expired: false,
      data: decoded as { userId: string; sessionId: string; deviceId: string }
    };
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      // Token scaduto ma strutturalmente valido
      try {
        const decoded = jwt.decode(token) as any;
        return {
          valid: false,
          expired: true,
          data: decoded ? {
            userId: decoded.userId,
            sessionId: decoded.sessionId,
            deviceId: decoded.deviceId
          } : undefined,
          error: 'Token scaduto'
        };
      } catch {
        return {
          valid: false,
          expired: true,
          error: 'Token scaduto e malformato'
        };
      }
    } else if (error instanceof jwt.JsonWebTokenError) {
      // Token malformato
      return {
        valid: false,
        expired: false,
        error: 'Token malformato o firma non valida'
      };
    } else {
      // Altri errori
      return {
        valid: false,
        expired: false,
        error: 'Errore di verifica token'
      };
    }
  }
}

// Funzione helper per verificare solo la validità (backward compatibility)
export async function isTokenValid(token: string): Promise<boolean> {
  const result = await verifyToken(token);
  return result.valid;
}

// Funzione helper per ottenere i dati del token (se valido)
export async function getTokenData(token: string): Promise<{ userId: string; sessionId: string; deviceId: string } | null> {
  const result = await verifyToken(token);
  return result.valid ? result.data || null : null;
}

export async function verifyRefreshToken(
  refreshToken: string
): Promise<{ userId: string; sessionId: string; deviceId: string } | null> {
  try {
    const decoded = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET as string
    );
    return decoded as { userId: string; sessionId: string; deviceId: string };
  } catch (error) {
    console.error('Errore verifica refresh token:', error instanceof Error ? error.message : 'Errore sconosciuto');
    return null;
  }
}
export async function validateSession(sessionId: string): Promise<boolean> {
  // Verifica che sessionId non sia vuoto
  if (!sessionId || typeof sessionId !== "string") {
    return false;
  }

  try {
    const session = await prisma.session.findUnique({
      where: { id: sessionId },
    });
    return session !== null && session.expires > new Date();
  } catch (error) {
    console.error("Errore validazione sessione:", error);
    return false;
  }
}

export async function login(email: string, password: string, deviceId: string) {
  // 1. Verifica credenziali
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

  // 2. Verifica autorizzazioni
  /*   if (!account.user.emailVerified) {
    throw new Error("Email not verified");
  } */

  // 3. Gestione sessione
  const session = await findOrCreateSession(
    account.user.id,
    deviceId,
    account.id
  );

  // 4. Generazione token
  const token = generateToken({
    userId: account.user.id,
    sessionId: session.id,
    deviceId: deviceId,
  });

  const refreshToken = generateRefreshToken({
    userId: account.user.id,
    sessionId: session.id,
    deviceId: deviceId,
  });

  return { token, refreshToken, sessionId: session.id, user: account.user };
}

export async function refreshToken(refreshToken: string, sessionId?: string) {
  try {
    const session = await prisma.session.findUnique({
      where: { id: sessionId },
    });
    if (!session) {
      throw new Error("Sessione non valida");
    }

    const decoded = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET as string
    ) as any;
    if (!decoded || !decoded.userId) {
      throw new Error("Refresh token non valido");
    }

    // Verifica se la sessione non è scaduta
    if (new Date(session.expires) <= new Date()) {
      throw new Error("Sessione scaduta");
    }
    
    const user = await prisma.user.findUnique({ 
      where: { id: decoded.userId } 
    });
    if (!user) {
      throw new Error("Utente non trovato");
    }

    return generateToken({
      userId: user.id,
      deviceId: session.deviceId,
      sessionId: session.id,
    });
  } catch (error) {
    console.error('Errore refresh token:', error instanceof Error ? error.message : 'Errore sconosciuto');
    throw error;
  }
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
  const session = await findOrCreateSession(user.id, deviceId, account.id);

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
    deviceId: deviceId,
  });

  return {
    token,
    refreshToken,
    sessionId: session.id,
    user,
  };
}

export function generateToken(payload: any) {
  return jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: "15m",
  });
}

export function generateRefreshToken(payload: any) {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET as string, {
    expiresIn: "7d",
  });
}
