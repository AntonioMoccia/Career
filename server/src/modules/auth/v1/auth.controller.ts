import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";

import { prisma } from "@config/db";
import {
  generateToken,
  generateRefreshToken,
} from "@modules/auth/v1/auth.service";

async function register(req: Request, res: Response, next: NextFunction) {
  const { email, password, username } = req.body;
  console.log(req.body);
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const existing = await prisma.authProviders.findUnique({
      where: {
        provider_providerUserId: {
          provider: "local",
          providerUserId: email,
        },
      },
    });

    if (existing) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.users.create({
      data: {
        email,
        username,
        authProviders: {
          create: {
            provider: "local",
            providerUserId: email,
            hashedPassword,
          },
        },
      },
    });

    const token = generateToken({
      userId: user.id,
      email: user.email,
      username: user.username,
      provider: "local",
    });
    //generate refresh token

    const refreshToken = generateRefreshToken(user.id);

    await prisma.refreshTokens.create({
      data: {
        token: refreshToken,
        userId: user.id,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
      },
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false, // Solo HTTPS in produzione
      sameSite: "strict", // Mitiga CSRF
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 giorni
    });

    res.status(201).json({ user, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Registration failed" });
  }
}

async function login(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const provider = await prisma.authProviders.findUnique({
      where: {
        provider_providerUserId: {
          provider: "local",
          providerUserId: email,
        },
      },
      include: { user: true },
    });

    if (!provider || !provider.hashedPassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const valid = await bcrypt.compare(password, provider.hashedPassword);
    if (!valid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateToken({
      userId: provider.user.id,
      email: provider.user.email,
      username: provider.user.username,
      provider: "local",
    });
    
    const refreshToken = generateRefreshToken(provider.user.id);
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false, // Solo HTTPS in produzione
      sameSite: "strict", // Mitiga CSRF
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 giorni
    });


    await prisma.refreshTokens.create({
      data: {
        token: refreshToken,
        userId: provider.user.id,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
      },
    });
    res.json({ token, refreshToken, user: provider.user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Login failed" });
  }
}
async function refresh(req: Request, res: Response, next: NextFunction) {
  const { refreshToken } = req.body;
  console.log(req.cookies.refreshToken);
  if (!refreshToken) {
    return res.status(400).json({ message: "Refresh token is required" });
  }
  try {
    const newToken = refreshToken(refreshToken);
    if (!newToken) {
      return res
        .status(401)
        .json({ message: "Invalid or expired refresh token" });
    }
    res.json({ token: newToken });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to refresh token" });
  }
}

export { register, login, refresh };
