import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
// If your Prisma file is located elsewhere, you can change the path
import { prisma } from "@config/db";
import { sendEmail } from "@modules/email/sendEmail";
export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),
  trustedOrigins: [
    "http://localhost:3001", // your frontend URL
    "http://localhost:3000",
  ],
  emailVerification: {
    sendVerificationEmail: async ({ user, url, token }, request) => {
      console.log("sending email verification");

      await sendEmail({
        to: user.email,
        subject: "Verify your email address",
        text: `Click the link to verify your email: ${url}`,
      });
    },
  },
  emailAndPassword: {
    enabled: true,
  },
  cookies: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  },
  socialProviders: {
    google: {
      prompt: "select_account",
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
});
