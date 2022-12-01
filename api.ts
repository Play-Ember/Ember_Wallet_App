
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/* createUser('paul', true)
  const users = await
 */

  // const users = await findUsers()

async function main() {
  
  //createUser('ppli', true)
  

 
}

//USER

interface User {
    name: string
    createdAt: number
}

export const createUser = async (user: User) => {
    console.log(user)
    return await prisma.user.create({
      data: user,
    
    })
  } 
/*   
  const findUsers = async () => {
    const users = await prisma.user.findMany()
    console.log(users)
  }  */
/*   
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
} */





// //REWARD

// const createReward = async (title:string, subtitle:string , expiresAt: Date, price: number, image: string, callToAction: string, topReward: boolean) => {
//     const reward = await prisma.reward.create({
//         data: {
//             title,
//             subtitle,
//             expiresAt,
//             price,
//             image,
//             callToAction,
//             topReward
//         }
//     })
//     console.log(reward)
// }

// const findRewards = async () => {
//     const rewards = await prisma.reward.findMany()
//     console.log(rewards)
// }

// const findReward = async (id: number) => {
//     const reward = await prisma.reward.findUnique({
//         where: {
//             id
//         }
//     })
//     console.log(reward)
// }

// const updateReward = async (id: number, title:string, subtitle:string , expiresAt: Date, price: number, image: string, callToAction: string, topReward: boolean ) => {
//     const reward = await prisma.reward.update({
//         where: {
//             id
//         },
//         data: {
//             title,
//             subtitle,
//             expiresAt,
//             price,
//             image,
//             callToAction,
//             topReward
//         }
//     })
//     console.log(reward)
// }

// const deleteReward = async (id: number) => {
//     const reward = await prisma.reward.delete({
//         where: {
//             id
//         }
//     })
//     console.log(reward)
// }


// // GAMES

// const createGame = async (title: string, subtitle: string, coverImage: string, smallImage: string, topGame: boolean, type: string, subtype: string) => {
//     const game = await prisma.game.create({
//         data: {
//             title,
//             subtitle,
//             coverImage,
//             smallImage,
//             topGame,
//             type,
//             subtype
//         }
//     })
//     console.log(game)
// }

// const findGames = async () => {
//     const games = await prisma.game.findMany()
//     console.log(games)
// }

// const findGame = async (id: number) => {
//     const game = await prisma.game.findUnique({
//         where: {
//             id
//         }
//     })
//     console.log(game)
// }

// const updateGame = async (id: number, title: string, subtitle: string, coverImage: string, smallImage: string, topGame: boolean, type: string, subtype: string) => {
//     const game = await prisma.game.update({
//         where: {
//             id
//         },
//         data: {
//             title,
//             subtitle,
//             coverImage,
//             smallImage,
//             topGame,
//             type,
//             subtype
//         }
//     })
//     console.log(game)
// }

// const deleteGame = async (id: number) => {
//     const game = await prisma.game.delete({
//         where: {
//             id
//         }
//     })
//     console.log(game)
// }



// main()
//   .then(async () => await prisma.$disconnect())
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//     }
//   )
