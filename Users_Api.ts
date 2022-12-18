import prisma from './client'


async function main() {

}

//USERS

interface User {
    name: string
}

export const createUser = async (name: string, id: number) => {
    return await prisma.user.create({
      data: {
        name: name,
        id: id
      }
    })
  } 
   
  const findUsers = async () => {
    const users = await prisma.user.findMany()
    console.log(users)
  }
  


  const deleteUser = async (id: number) => {
    await prisma.user.delete({
      where:{id:id}
    })
  }
  
  const updateUser = async (user: User, id:number) => {
    await prisma.user.update({
      where: {id:id},
      data: user
    })
  }

export const updateUsername = async (user: User, id:number) => {
await prisma.user.update({
    where: {id:id},
    data: user
})
}
//a fonction that updates the users hasWallet to true
export const updatetoHasWallet = async (id:number) => {
    await prisma.user.update({
        where: {id:id},
        data: {hasWallet:true}
    })
}

// a function that updates the users wallet address
export const updateWallet = async (id:number, wallet:string) => {
    await prisma.user.update({
        where: {id:id},
        data: {wallet:wallet}
    })
}

// a function that updates the users earnedTokens
export const updateEarnedTokens = async (id:number, earnedTokens:number) => {
    await prisma.user.update({
        where: {id:id},
        data: {earnedTokens:earnedTokens}
    })
}

// a function that updates the users spentTokens
export const updateSpentTokens = async (id:number, spentTokens:number) => {
    await prisma.user.update({
        where: {id:id},
        data: {spentTokens:spentTokens}
    })
}

// a function that updates the users balance
export const updateBalance = async (id:number, balance:number) => {
    await prisma.user.update({
        where: {id:id},
        data: {balance:balance}
    })
}

// a function that updates the users playedGames
export const updatePlayedGames = async (id:number, playedGames:[]) => {
    await prisma.user.update({
        where: {id:id},
        data: {}
    })
}


 // GAME
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

//

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

main() 
   .then(async () => await prisma.$disconnect())
    .catch((e) => {
        throw e
    }
    )
