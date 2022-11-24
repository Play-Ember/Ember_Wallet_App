/*
  Warnings:

  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT,
    "name" TEXT NOT NULL,
    "hasWallet" BOOLEAN NOT NULL DEFAULT false,
    "wallet" TEXT,
    "earnedTokens" INTEGER NOT NULL DEFAULT 0,
    "spentTokens" INTEGER NOT NULL DEFAULT 0,
    "balance" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_User" ("balance", "createdAt", "earnedTokens", "email", "hasWallet", "id", "name", "spentTokens", "wallet") SELECT "balance", "createdAt", "earnedTokens", "email", "hasWallet", "id", "name", "spentTokens", "wallet" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
