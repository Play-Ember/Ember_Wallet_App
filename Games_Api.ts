import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


// GAMES
const createGame = async (title: string, subtitle: string, coverImage: string, smallImage: string, topGame: boolean, type: string, subtype: string) => {
    const game = await prisma.game.create({
        data: {
            title,
            subtitle,
            coverImage,
            smallImage,
            topGame,
            type,
            subtype
        }
    })
    console.log(game)
   }

const findGames = async () => {
    const games = await prisma.game.findMany()
    console.log(games)
}

const findOneGame = async (id: number) => {
    const game = await prisma.game.findUnique({
        where: {
            id
        }
    })
    console.log(game)
   }

const updateGame = async (id: number, title: string, subtitle: string, coverImage: string, smallImage: string, topGame: boolean, type: string, subtype: string) => {
    const game = await prisma.game.update({
        where: {
            id
        },
        data: {
            title,
            subtitle,
            coverImage,
            smallImage,
            topGame,
            type,
            subtype
        }
    })
    console.log(game)
   }

const deleteGame = async (id: number) => {
    const game = await prisma.game.delete({
        where: {
            id
        }
    })
    console.log(game)
   }
