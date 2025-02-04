//REWARD

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

//REWARDS
const createReward = async (title:string, subtitle:string , expiresAt: Date, price: number, image: string, callToAction: string, topReward: boolean) => {
    const reward = await prisma.reward.create({
        data: {
            title,
            subtitle,
            expiresAt,
            price,
            image,
            callToAction,
            topReward
        }
    })
    console.log(reward)
   }
const findRewards = async () => {
    const rewards = await prisma.reward.findMany()
    console.log(rewards)
}

const findRewardsPerPlayer = async (playerId: number) => {
   const rewards = await prisma.reward.findMany({
       where: {
           id: playerId
       }
   })
   console.log(rewards)
}

const findReward = async (id: number) => {
    const reward = await prisma.reward.findUnique({
        where: {
            id
        }
    })
    console.log(reward)
   }

const updateReward = async (id: number, title:string, subtitle:string , expiresAt: Date, price: number, image: string, callToAction: string, topReward: boolean ) => {
    const reward = await prisma.reward.update({
        where: {
            id
        },
        data: {
            title,
            subtitle,
            expiresAt,
            price,
            image,
            callToAction,
            topReward
        }
    })
    console.log(reward)
   }

const deleteReward = async (id: number) => {
    const reward = await prisma.reward.delete({
        where: {
            id
        }
    })
    console.log(reward)
   }

// a function to add a reward to a user
export const giveRewardToUser = async (userId: number, rewardId: number) => {
  // add the reward to the user wonRewards field
    const updatedUser = await prisma.user.update({
        where: {
            id: userId
        },
        data: {
            wonRewards: {
                connect: {
                    id: rewardId
                }
            }
        }
    })
    console.log(updatedUser)
}

export const getRewardPrice = async (rewardId: number) => {
    const reward = await prisma.reward.findUnique({
        where: {
            id: rewardId
        }
    })
    return reward?.price
}
