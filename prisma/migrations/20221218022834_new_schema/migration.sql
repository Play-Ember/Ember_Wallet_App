/*
  Warnings:

  - You are about to drop the column `is_a_skin` on the `Collectible` table. All the data in the column will be lost.
  - Added the required column `is_an_accesory` to the `Collectible` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_an_nft` to the `Collectible` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `type` on the `Collectible` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `branded` to the `Reward` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Reward` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Brand" AS ENUM ('Nike', 'Adidas', 'Amazon', 'Starbucks');

-- CreateEnum
CREATE TYPE "RewardType" AS ENUM ('Fashion', 'Drinks', 'Sports', 'Games', 'Ember', 'Collectible');

-- AlterTable
ALTER TABLE "Collectible" DROP COLUMN "is_a_skin",
ADD COLUMN     "is_an_accesory" BOOLEAN NOT NULL,
ADD COLUMN     "is_an_nft" BOOLEAN NOT NULL,
DROP COLUMN "type",
ADD COLUMN     "type" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Reward" ADD COLUMN     "brand" "Brand",
ADD COLUMN     "branded" BOOLEAN NOT NULL,
DROP COLUMN "type",
ADD COLUMN     "type" "RewardType" NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "brandSelection" "Brand"[],
ADD COLUMN     "hasAvatar" BOOLEAN,
ADD COLUMN     "rewardTypeSelection" "RewardType"[];

-- DropEnum
DROP TYPE "CollectibleType";
