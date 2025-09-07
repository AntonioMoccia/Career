import { fromNodeHeaders } from "better-auth/node";
import { auth } from "@modules/auth/auth";
import { Request, Response, NextFunction } from "express";
export const useAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });
  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  req.user = session.user;
  next();
};


