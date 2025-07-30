-- AlterTable
ALTER TABLE "public"."Companies" ADD COLUMN     "industry" TEXT,
ADD COLUMN     "logo" TEXT,
ADD COLUMN     "size" TEXT;

-- AlterTable
ALTER TABLE "public"."HRContacts" ADD COLUMN     "linkedin" TEXT;

-- AlterTable
ALTER TABLE "public"."InterviewSteps" ADD COLUMN     "feedback" TEXT,
ADD COLUMN     "interviewer" TEXT,
ADD COLUMN     "location" TEXT,
ADD COLUMN     "reminderAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "public"."JobApplications" ADD COLUMN     "appliedAt" TIMESTAMP(3),
ADD COLUMN     "coverLetterFile" TEXT,
ADD COLUMN     "cvFile" TEXT,
ADD COLUMN     "source" TEXT,
ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "linkedin" TEXT,
ADD COLUMN     "phone" TEXT;
