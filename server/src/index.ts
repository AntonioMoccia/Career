import dotenv from "dotenv";
dotenv.config();
import express, { Application } from "express";

import cors from "cors";
import cookieParser from "cookie-parser";

import { toNodeHandler } from "better-auth/node";
import { auth } from "@modules/auth/auth";
import { useAuth } from "@modules/auth/middleware";

import companyRouter from "@modules/company/company.router";
import hrRouter from "@modules/hr/hr.router";
import interviewStepRouter from "@modules/interviewStep/interviewStep.router";
import jobApplicationRouter from "@modules/jobApplication/jobApplication.router";

const app: Application = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.all("/api/auth/*splat", toNodeHandler(auth.handler));
app.use(cookieParser());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/api/me", useAuth, async (req, res, next) => {
  return res.json(req.user);
});

app.use("/api/v1/companies", useAuth, companyRouter);
app.use("/api/v1/hr", useAuth, hrRouter);
app.use("/api/v1/interviewStep", useAuth, interviewStepRouter);
app.use("/api/v1/jobApplication", useAuth, jobApplicationRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
