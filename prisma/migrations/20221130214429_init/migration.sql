-- CreateEnum
CREATE TYPE "AccessoryType" AS ENUM ('HAT', 'GLASSES', 'MASK', 'SHIRT', 'PANTS', 'SHOES', 'ELECTRONICS', 'SPORT');

-- CreateEnum
CREATE TYPE "CollectibleType" AS ENUM ('Accessory', 'NFT');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT,
    "name" TEXT NOT NULL,
    "hasWallet" BOOLEAN NOT NULL DEFAULT false,
    "wallet" TEXT,
    "earnedTokens" INTEGER NOT NULL DEFAULT 0,
    "spentTokens" INTEGER NOT NULL DEFAULT 0,
    "balance" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reward" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "price" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "callToAction" TEXT NOT NULL,
    "topReward" BOOLEAN NOT NULL DEFAULT false,
    "type" TEXT,
    "ownerId" INTEGER,
    "gameId" INTEGER,

    CONSTRAINT "Reward_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "coverImage" TEXT NOT NULL,
    "smallImage" TEXT NOT NULL,
    "topGame" BOOLEAN NOT NULL DEFAULT false,
    "type" TEXT,
    "subtype" TEXT,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Avatar" (
    "id" SERIAL NOT NULL,
    "avatarLevel" INTEGER NOT NULL DEFAULT 1,
    "ownerId" INTEGER NOT NULL,

    CONSTRAINT "Avatar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Accessory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" "AccessoryType" NOT NULL,
    "bundle" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "equipped" BOOLEAN NOT NULL DEFAULT false,
    "rarity" TEXT,
    "avatarId" INTEGER,

    CONSTRAINT "Accessory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Collectible" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" "CollectibleType" NOT NULL,
    "is_rare" BOOLEAN NOT NULL,
    "is_a_skin" BOOLEAN NOT NULL,
    "image" TEXT NOT NULL,
    "ownerId" INTEGER NOT NULL,

    CONSTRAINT "Collectible_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_playedGames" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_recommendedGames" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Game_title_key" ON "Game"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Avatar_ownerId_key" ON "Avatar"("ownerId");

-- CreateIndex
CREATE UNIQUE INDEX "_playedGames_AB_unique" ON "_playedGames"("A", "B");

-- CreateIndex
CREATE INDEX "_playedGames_B_index" ON "_playedGames"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_recommendedGames_AB_unique" ON "_recommendedGames"("A", "B");

-- CreateIndex
CREATE INDEX "_recommendedGames_B_index" ON "_recommendedGames"("B");

-- AddForeignKey
ALTER TABLE "Reward" ADD CONSTRAINT "Reward_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reward" ADD CONSTRAINT "Reward_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avatar" ADD CONSTRAINT "Avatar_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Accessory" ADD CONSTRAINT "Accessory_avatarId_fkey" FOREIGN KEY ("avatarId") REFERENCES "Avatar"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collectible" ADD CONSTRAINT "Collectible_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_playedGames" ADD CONSTRAINT "_playedGames_A_fkey" FOREIGN KEY ("A") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_playedGames" ADD CONSTRAINT "_playedGames_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_recommendedGames" ADD CONSTRAINT "_recommendedGames_A_fkey" FOREIGN KEY ("A") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_recommendedGames" ADD CONSTRAINT "_recommendedGames_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
