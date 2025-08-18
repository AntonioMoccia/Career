import { Request, Response } from "express";
import * as authService from "@modules/auth/v1/auth.service";
import { prisma } from "@config/db";
import jwt from "jsonwebtoken";
import crypto from "crypto";

export async function register(req: Request, res: Response) {
  const { email, password, username } = req.body;
  try {
    const user = await authService.register(email, password, username);
    res.json(user);
  } catch (e) {
    if (e instanceof Error) {
      res.status(400).json({ error: e.message });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    // Validazione input
    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Email e password sono obbligatori" });
    }

    // Gestione DeviceId sicura
    let deviceId: string;
    
    // 1. Prova a prenderlo dal body (client esplicito)
    if (req.body.deviceId && typeof req.body.deviceId === 'string') {
      deviceId = req.body.deviceId;
    } 
    // 2. Prova a estrarlo da un token esistente (refresh login)
    else {
      const authHeader = req.headers["authorization"] || req.headers["Authorization"];
      
      if (authHeader && typeof authHeader === "string" && authHeader.startsWith("Bearer ")) {
        const token = authHeader.replace("Bearer ", "");
        try {
          const decoded: any = jwt.decode(token);
          if (decoded && decoded.deviceId) {
            deviceId = decoded.deviceId;
          } else {
            // Token senza deviceId, genera nuovo
            deviceId = crypto.randomUUID();
          }
        } catch {
          // Token malformato, genera nuovo deviceId
          deviceId = crypto.randomUUID();
        }
      } else {
        // Nessun header, nuovo dispositivo
        deviceId = crypto.randomUUID();
      }
    }

    // Esegui il login tramite service
    const result = await authService.login(email, password, deviceId);

    // Setta il refreshToken come cookie httpOnly per sicurezza (web)
    res.cookie("refreshToken", result.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/api/v1/auth/refresh",
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 giorni
    });

    // Restituisci i dati al client
    res.json({
      user: result.user,
      token: result.token,
      refreshToken: result.refreshToken,
      message: "Login effettuato con successo",
    });
  } catch (e) {
    console.error('Errore login:', e);
    if (e instanceof Error) {
      res.status(400).json({ 
        error: e.message,
        ...(process.env.NODE_ENV === 'development' && { details: e.stack })
      });
    } else {
      res.status(500).json({ error: "Errore interno del server" });
    }
  }
}

export async function refresh(req: Request, res: Response) {
  try {
    // Prendi il refreshToken dal body (mobile) o dal cookie (web)
    const bodyRefreshToken = req.body.refreshToken;
    const cookieRefreshToken = req.cookies.refreshToken;
    const refreshToken = bodyRefreshToken || cookieRefreshToken;

    if (!refreshToken) {
      return res.status(401).json({ error: "Refresh token mancante" });
    }

    // Decodifica il refreshToken per ottenere sessionId
    const decoded = await authService.verifyRefreshToken(refreshToken);
    
    if (!decoded || !decoded.sessionId) {
      return res.status(401).json({ error: "Refresh token non valido" });
    }

    const { sessionId } = decoded;

    // Valida la sessione
    const isValid = await authService.validateSession(sessionId);
    if (!isValid) {
      return res.status(401).json({ error: "Sessione scaduta o non valida" });
    }

    // Genera nuovo access token
    const token = await authService.refreshToken(refreshToken, sessionId);
    res.json({ token });
  } catch (e) {
    console.error('Errore refresh token:', e);
    if (e instanceof Error) {
      res.status(400).json({ 
        error: e.message,
        ...(process.env.NODE_ENV === 'development' && { details: e.stack })
      });
    } else {
      res.status(500).json({ error: "Errore interno del server" });
    }
  }
}

export async function googleCallback(req: Request, res: Response) {
  try {
    // req.user viene popolato dalla strategia Google
    const user = req.user as any;

    if (!user || !user.id) {
      return res.status(400).json({ error: "Autenticazione Google fallita" });
    }

    // Prova a estrarre deviceId dal token Authorization se presente
    let deviceId: string | undefined;
    const authHeader =
      req.headers["authorization"] || req.headers["Authorization"];

    if (
      authHeader &&
      typeof authHeader === "string" &&
      authHeader.startsWith("Bearer ")
    ) {
      const token = authHeader.replace("Bearer ", "");
      try {
        const decoded: any = jwt.decode(token);
        if (decoded && decoded.deviceId) {
          deviceId = decoded.deviceId;
        }
      } catch {
        // Token non valido, continua senza deviceId
      }
    }

    // Se non c'è deviceId, generane uno nuovo
    if (!deviceId) {
      deviceId = crypto.randomUUID();
    }

    // Trova l'account Google dell'utente per avere l'accountId
    const googleAccount = await prisma.account.findFirst({
      where: {
        userId: user.id,
        provider: "google",
      },
    });

    if (!googleAccount) {
      return res.status(400).json({ error: "Account Google non trovato" });
    }

    // Usa la stessa logica con transazioni per evitare race conditions
    const session = await prisma.$transaction(async (tx) => {
      // Elimina eventuali sessioni precedenti per lo stesso userId+deviceId
      await tx.session.deleteMany({
        where: {
          userId: user.id,
          deviceId: deviceId,
        },
      });

      // Crea nuova sessione
      return await tx.session.create({
        data: {
          userId: user.id,
          accountId: googleAccount.id,
          deviceId: deviceId,
          expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        },
      });
    });

    // Genera JWT e refreshToken per l'utente Google con sessionId
    const token = authService.generateToken({
      userId: user.id,
      email: user.email,
      name: user.name,
      sessionId: session.id,
      deviceId: deviceId,
    });

    const refreshToken = authService.generateRefreshToken({
      userId: user.id,
      sessionId: session.id,
      deviceId: deviceId,
    });

    // Setta il refreshToken come cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/api/v1/auth/refresh",
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    // Per Google OAuth, reindirizza al frontend con i parametri
    const frontendUrl = process.env.FRONTEND_URL || "http://localhost:3000";
    const callbackUrl = `${frontendUrl}/auth/google/callback?token=${encodeURIComponent(
      token
    )}&user=${encodeURIComponent(JSON.stringify(user))}`;

    res.redirect(callbackUrl);
  } catch (e) {
    console.error("Errore Google callback:", e);
    if (e instanceof Error) {
      res.status(400).json({ 
        error: e.message,
        ...(process.env.NODE_ENV === 'development' && { details: e.stack })
      });
    } else {
      res.status(500).json({ error: "Errore interno del server" });
    }
  }
}

export async function me(req: Request, res: Response) {
  try {
    const userLogged = req.user as {
      id: string;
      sessionId: string;
      deviceId: string;
    };

    if (!userLogged || !userLogged.id) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Cerca l'utente completo nel database
    const user = await prisma.user.findUnique({
      where: { id: userLogged.id },
      select: {
        id: true,
        email: true,
        name: true,
        emailVerified: true,
        emailVerifiedData: true,
        image: true,
        phone: true,
        linkedin: true,
        // Escludi campi sensibili se presenti
      },
    });

    if (!user) {
      return res.status(404).json({ error: "Utente non trovato" });
    }

    res.json({
      user,
    });
  } catch (e) {
    console.error("Errore me:", e);
    if (e instanceof Error) {
      res.status(400).json({ 
        error: e.message,
        ...(process.env.NODE_ENV === 'development' && { details: e.stack })
      });
    } else {
      res.status(500).json({ error: "Errore interno del server" });
    }
  }
}

export async function verifyAccessToken(req: Request, res: Response) {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({ 
        success: false, 
        error: "Token di accesso richiesto",
        code: "NO_TOKEN"
      });
    }

    // Usa la nuova funzione di verifica
    const tokenResult = await authService.verifyToken(token);

    if (tokenResult.valid && tokenResult.data) {
      // Verifica che la sessione esista ancora nel database
      const session = await prisma.session.findUnique({
        where: { id: tokenResult.data.sessionId },
        include: { user: true }
      });

      if (!session || session.expires < new Date()) {
        return res.status(401).json({ 
          success: false, 
          error: "Sessione scaduta",
          code: "SESSION_EXPIRED"
        });
      }

      res.json({ 
        success: true,
        user: {
          id: session.user.id,
          email: session.user.email,
          name: session.user.name,
          emailVerified: session.user.emailVerified
        },
        tokenInfo: {
          valid: true,
          expired: false
        }
      });
    } else if (tokenResult.expired) {
      return res.status(401).json({ 
        success: false, 
        error: "Token scaduto",
        code: "TOKEN_EXPIRED",
        tokenInfo: {
          valid: false,
          expired: true
        }
      });
    } else {
      return res.status(401).json({ 
        success: false, 
        error: tokenResult.error || "Token non valido",
        code: "INVALID_TOKEN",
        tokenInfo: {
          valid: false,
          expired: false
        }
      });
    }
  } catch (error) {
    console.error('Verify token error:', error);
    res.status(500).json({ 
      success: false, 
      error: "Errore interno del server",
      code: "INTERNAL_ERROR"
    });
  }
}
