/*
  Warnings:

  - You are about to drop the `AuthProvider` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Company` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `HRContact` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `InterviewStep` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `JobApplication` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AuthProvider" DROP CONSTRAINT "AuthProvider_userId_fkey";

-- DropForeignKey
ALTER TABLE "HRContact" DROP CONSTRAINT "HRContact_companyId_fkey";

-- DropForeignKey
ALTER TABLE "InterviewStep" DROP CONSTRAINT "InterviewStep_hrContactId_fkey";

-- DropForeignKey
ALTER TABLE "InterviewStep" DROP CONSTRAINT "InterviewStep_jobId_fkey";

-- DropForeignKey
ALTER TABLE "JobApplication" DROP CONSTRAINT "JobApplication_companyId_fkey";

-- DropForeignKey
ALTER TABLE "_HRContactsOnJobs" DROP CONSTRAINT "_HRContactsOnJobs_A_fkey";

-- DropForeignKey
ALTER TABLE "_HRContactsOnJobs" DROP CONSTRAINT "_HRContactsOnJobs_B_fkey";

-- DropTable
DROP TABLE "AuthProvider";

-- DropTable
DROP TABLE "Company";

-- DropTable
DROP TABLE "HRContact";

-- DropTable
DROP TABLE "InterviewStep";

-- DropTable
DROP TABLE "JobApplication";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "avatarUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RefreshTokens" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RefreshTokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuthProviders" (
    "id" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerUserId" TEXT NOT NULL,
    "hashedPassword" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuthProviders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Companies" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT,
    "website" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HRContacts" (
    "id" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "role" TEXT,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "HRContacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobApplications" (
    "id" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "description" TEXT,
    "status" "ApplicationStatus" NOT NULL DEFAULT 'APPLIED',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "JobApplications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InterviewSteps" (
    "id" TEXT NOT NULL,
    "jobId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "status" "StepStatus" NOT NULL DEFAULT 'SCHEDULED',
    "notes" TEXT,
    "hrContactId" TEXT,

    CONSTRAINT "InterviewSteps_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "RefreshTokens_token_key" ON "RefreshTokens"("token");

-- CreateIndex
CREATE UNIQUE INDEX "AuthProviders_provider_providerUserId_key" ON "AuthProviders"("provider", "providerUserId");

-- AddForeignKey
ALTER TABLE "RefreshTokens" ADD CONSTRAINT "RefreshTokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuthProviders" ADD CONSTRAINT "AuthProviders_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HRContacts" ADD CONSTRAINT "HRContacts_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobApplications" ADD CONSTRAINT "JobApplications_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InterviewSteps" ADD CONSTRAINT "InterviewSteps_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "JobApplications"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InterviewSteps" ADD CONSTRAINT "InterviewSteps_hrContactId_fkey" FOREIGN KEY ("hrContactId") REFERENCES "HRContacts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HRContactsOnJobs" ADD CONSTRAINT "_HRContactsOnJobs_A_fkey" FOREIGN KEY ("A") REFERENCES "HRContacts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HRContactsOnJobs" ADD CONSTRAINT "_HRContactsOnJobs_B_fkey" FOREIGN KEY ("B") REFERENCES "JobApplications"("id") ON DELETE CASCADE ON UPDATE CASCADE;
