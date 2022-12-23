import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// GAMES

export const gameDefaults = {
    topGame: false,

  
    subtitle: null,
    coverImage: null,
    smallImage: null,
    type: null,
    subtype: null,

}




export const createGame = async (title: string, id:number) => {
    return await prisma.game.create({
        data: {
            title: title,
            id: id
        }
    })
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
