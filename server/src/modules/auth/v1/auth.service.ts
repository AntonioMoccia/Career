import { prisma } from "@config/db";
import { RefreshTokens } from "@prisma/client";
import { TokenPayload } from "@types";
import jwt from "jsonwebtoken";

function generateToken(payload: TokenPayload): string {
  return jwt.sign(
    {
      userId: payload.userId,
      email: payload.email,
      username: payload.username,
      provider: payload.provider,
    },
    process.env.JWT_SECRET as string,
    { expiresIn: 3 * 60 } // 3 minutes
  );
}

function generateRefreshToken(userId: string): string {
  if (!userId) {
    throw new Error("User ID is required to generate a refresh token");
  }

  const token = jwt.sign(
    { userId },
    process.env.REFRESH_TOKEN_SECRET as string,
    {
      expiresIn: "7d",
    }
  );

  return token;
}

async function refreshToken(refreshToken: string): Promise<string | null> {
  //verificare la validità del token di refresh

  const storedToken = await prisma.refreshTokens.findUnique({
    where: { token: refreshToken },
  });

  if (!storedToken) return null; // Non esiste o revocato
  if (storedToken.revoked) return null; // Revocato manualmenteF

  const decoded = jwt.verify(
    refreshToken,
    process.env.JWT_SECRET as string
  ) as TokenPayload;

  if (!decoded || !decoded.userId) {
    throw new Error("Invalid refresh token");
  }

  return generateToken(decoded);
}

export { generateToken, refreshToken, generateRefreshToken };
