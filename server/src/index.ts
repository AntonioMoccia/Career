import dotenv from "dotenv";
dotenv.config();
import express, { Application, NextFunction, Request, Response } from "express";

import cors from "cors";
import cookieParser from "cookie-parser";

import { fromNodeHeaders, toNodeHandler } from "better-auth/node";
import { auth } from "@modules/auth/auth";

//import authRouter from '@modules/auth/v1/auth.router';
import companyRouter from "@modules/company/company.router";
import hrRouter from "@modules/hr/hr.router";
import interviewStepRouter from "@modules/interviewStep/interviewStep.router";
import jobApplicationRouter from "@modules/jobApplication/jobApplication.router";

const app: Application = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:3000", // il tuo frontend
    credentials: true, // necessario per cookie / Authorization headers
  })
);
app.all("/api/auth/*splat", toNodeHandler(auth.handler));
app.use(cookieParser());
app.use(express.json());
//initPassport(app);
app.use(express.urlencoded({ extended: true }));

const authMiddleware = async (
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

app.get("/api/me", authMiddleware, async (req, res, next) => {
  return res.json(req.user);
});
app.use("/api/v1/companies", companyRouter);
app.use("/api/v1/hr", hrRouter);
app.use("/api/v1/interviewStep", interviewStepRouter);
app.use("/api/v1/jobApplication", jobApplicationRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
