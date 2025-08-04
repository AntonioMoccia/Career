import { Request, Response } from "express";
import * as authService from "@modules/auth/v1/auth.service";
import { prisma } from "@config/db";

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

import jwt from "jsonwebtoken";
import crypto from "crypto";

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    // Validazione input
    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Email e password sono obbligatori" });
    }

    // Prova a estrarre il deviceId dal token Authorization se presente
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
        console.log(decoded);

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

    // Esegui il login tramite service
    const result = await authService.login(email, password, deviceId);

    // Verifica se l'email è verificata (già gestito nel service)
    if (!result.user.emailVerified) {
      return res.status(403).json({ error: "Email non verificata" });
    }

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
    if (e instanceof Error) {
      res.status(400).json({ error: e.message });
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
    // Decodifica il sessionId dal refreshToken
    let sessionId: string | undefined;
    try {
      const decoded: any = jwt.decode(refreshToken);
      if (decoded && decoded.sessionId) {
        sessionId = decoded.sessionId;
      }
    } catch {}
    const token = await authService.refreshToken(refreshToken, sessionId);
    res.json({ token });
  } catch (e) {
    if (e instanceof Error) {
      res.status(400).json({ error: e.message });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
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

    // Elimina eventuali sessioni precedenti per lo stesso userId+deviceId
    await prisma.session.deleteMany({
      where: {
        userId: user.id,
        deviceId: deviceId,
      },
    });

    // Crea nuova sessione
    const session = await prisma.session.create({
      data: {
        userId: user.id,
        accountId: googleAccount.id,
        deviceId: deviceId,
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
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
    const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
    const callbackUrl = `${frontendUrl}/auth/google/callback?token=${encodeURIComponent(token)}&user=${encodeURIComponent(JSON.stringify(user))}`;
    
    res.redirect(callbackUrl);
  } catch (e) {
    console.error("Errore Google callback:", e);
    if (e instanceof Error) {
      res.status(400).json({ error: e.message });
    } else {
      res.status(500).json({ error: "Errore interno del server" });
    }
  }
}
