/*
  Warnings:

  - You are about to drop the column `balance` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `earnedTokens` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `spentTokens` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "balance",
DROP COLUMN "createdAt",
DROP COLUMN "earnedTokens",
DROP COLUMN "spentTokens",
ALTER COLUMN "hasWallet" DROP DEFAULT;
