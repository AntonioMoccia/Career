-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('APPLIED', 'IN_PROGRESS', 'OFFER', 'REJECTED');

-- CreateEnum
CREATE TYPE "StepStatus" AS ENUM ('SCHEDULED', 'COMPLETED', 'CANCELED');

-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT,
    "website" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HRContact" (
    "id" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "role" TEXT,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "HRContact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobApplication" (
    "id" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "description" TEXT,
    "status" "ApplicationStatus" NOT NULL DEFAULT 'APPLIED',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "JobApplication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InterviewStep" (
    "id" TEXT NOT NULL,
    "jobId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "status" "StepStatus" NOT NULL DEFAULT 'SCHEDULED',
    "notes" TEXT,
    "hrContactId" TEXT,

    CONSTRAINT "InterviewStep_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_HRContactsOnJobs" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_HRContactsOnJobs_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_HRContactsOnJobs_B_index" ON "_HRContactsOnJobs"("B");

-- AddForeignKey
ALTER TABLE "HRContact" ADD CONSTRAINT "HRContact_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobApplication" ADD CONSTRAINT "JobApplication_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InterviewStep" ADD CONSTRAINT "InterviewStep_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "JobApplication"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InterviewStep" ADD CONSTRAINT "InterviewStep_hrContactId_fkey" FOREIGN KEY ("hrContactId") REFERENCES "HRContact"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HRContactsOnJobs" ADD CONSTRAINT "_HRContactsOnJobs_A_fkey" FOREIGN KEY ("A") REFERENCES "HRContact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HRContactsOnJobs" ADD CONSTRAINT "_HRContactsOnJobs_B_fkey" FOREIGN KEY ("B") REFERENCES "JobApplication"("id") ON DELETE CASCADE ON UPDATE CASCADE;
