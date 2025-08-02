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
    // Prova a estrarre il deviceId dal token Authorization se presente
    let deviceId: string | undefined;
    const authHeader = req.headers["authorization"] || req.headers["Authorization"];
    if (authHeader && typeof authHeader === "string" && authHeader.startsWith("Bearer ")) {
      const token = authHeader.replace("Bearer ", "");
      try {
        const decoded: any = jwt.decode(token);
        if (decoded && decoded.deviceId) {
          deviceId = decoded.deviceId;
        }
      } catch {}
    }

    if (!deviceId) {
      deviceId = crypto.randomUUID();
    }

    // Passa il deviceId al service e ottieni anche la sessione
    const result = await authService.login(req.body.email, req.body.password, deviceId);


    if(!result) return res.status(401).json({ error: "Invalid credentials" });


    // Setta il refreshToken come cookie (web)
    res.cookie("refreshToken", result.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/api/v1/auth/refresh",
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });
    // Restituisci anche il sessionId e deviceId al client
    res.json(result);
  } catch (e) {
    if (e instanceof Error) {
      res.status(400).json({ error: e.message });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
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
    res.json(token);
  } catch (e) {
    if (e instanceof Error) {
      res.status(400).json({ error: e.message });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export async function googleCallback(req: Request, res: Response) {
  // req.user viene popolato dalla strategia Google
  const user = req.user as any;
  try {
    // Prova a estrarre deviceId dal token Authorization se presente
    let deviceId: string | undefined;
    const authHeader = req.headers["authorization"] || req.headers["Authorization"];
    if (authHeader && typeof authHeader === "string" && authHeader.startsWith("Bearer ")) {
      const token = authHeader.replace("Bearer ", "");
      try {
        const decoded: any = jwt.decode(token);
        if (decoded && decoded.deviceId) {
          deviceId = decoded.deviceId;
        }
      } catch {}
    }
    if (!deviceId) {
      deviceId = crypto.randomUUID();
    }
    // Elimina eventuali sessioni precedenti per lo stesso userId+deviceId
    let session;
    if (user.id) {
      await prisma.session.deleteMany({
        where: {
          userId: user.id,
          deviceId: deviceId,
        },
      });
      session = await prisma.session.create({
        data: {
          sessionToken: '',
          userId: user.id,
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
      });
      const refreshToken = authService.generateRefreshToken(user.id, session.id);
      await prisma.session.update({
        where: { id: session.id },
        data: { sessionToken: refreshToken },
      });
      res.json({ user, token, refreshToken, sessionId: session.id, deviceId });
    } else {
      res.status(400).json({ error: "User id mancante" });
    }
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
