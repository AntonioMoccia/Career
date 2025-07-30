import { Request, Response } from "express";
import * as authService from "@modules/auth/v1/auth.service";
import { prisma } from "@config/db";

export async function register(req: Request, res: Response) {
  const { email, password, username } = req.body;
  try {
    const user = await authService.register(
      email,
      password,
      username
    );
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
    const result = await authService.login(req.body.email, req.body.password);
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
    const token = await authService.refreshToken(req.body.refreshToken);
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
  // req.user viene popolato dalla strategia Google
  const user = req.user as any;
  try {
    // Genera JWT e refreshToken per l'utente Google
    const token = authService.generateToken({ userId: user.id, email: user.email, name: user.name });
    const refreshToken = authService.generateRefreshToken(user.id);
    // Salva la sessione refreshToken in DB (opzionale, ma consigliato)
    if (user.id) {
      
      await prisma.session.create({
        data: {
          sessionToken: refreshToken,
          userId: user.id,
          expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        },
      });
    }
    res.json({ user, token, refreshToken });
  } catch (e) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
