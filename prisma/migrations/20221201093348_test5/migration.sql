/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `hasWallet` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `wallet` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Accessory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Avatar` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Collectible` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Game` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Reward` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_playedGames` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_recommendedGames` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Accessory" DROP CONSTRAINT "Accessory_avatarId_fkey";

-- DropForeignKey
ALTER TABLE "Avatar" DROP CONSTRAINT "Avatar_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "Collectible" DROP CONSTRAINT "Collectible_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "Reward" DROP CONSTRAINT "Reward_gameId_fkey";

-- DropForeignKey
ALTER TABLE "Reward" DROP CONSTRAINT "Reward_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "_playedGames" DROP CONSTRAINT "_playedGames_A_fkey";

-- DropForeignKey
ALTER TABLE "_playedGames" DROP CONSTRAINT "_playedGames_B_fkey";

-- DropForeignKey
ALTER TABLE "_recommendedGames" DROP CONSTRAINT "_recommendedGames_A_fkey";

-- DropForeignKey
ALTER TABLE "_recommendedGames" DROP CONSTRAINT "_recommendedGames_B_fkey";

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "email",
DROP COLUMN "hasWallet",
DROP COLUMN "id",
DROP COLUMN "wallet",
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("name");

-- DropTable
DROP TABLE "Accessory";

-- DropTable
DROP TABLE "Avatar";

-- DropTable
DROP TABLE "Collectible";

-- DropTable
DROP TABLE "Game";

-- DropTable
DROP TABLE "Reward";

-- DropTable
DROP TABLE "_playedGames";

-- DropTable
DROP TABLE "_recommendedGames";

-- DropEnum
DROP TYPE "AccessoryType";

-- DropEnum
DROP TYPE "CollectibleType";
