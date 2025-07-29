-- AlterTable
ALTER TABLE "RefreshTokens" ADD COLUMN     "revoked" BOOLEAN NOT NULL DEFAULT false;
