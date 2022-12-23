/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Game` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Game_title_key";

-- AlterTable
ALTER TABLE "Game" DROP COLUMN "createdAt",
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Game_id_seq";
