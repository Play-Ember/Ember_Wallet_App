import prisma from './client'
import {getRewardPrice, giveRewardToUser} from './Rewards_Api'

// TBD: add a function to charge the user credit card / apple pay

// TBD: add a function to lauch the game or the app store download

//USERS

export const userDefaults = {
    balance: null,
    brandSelection: [],
    earnedTokens: null,
    hasAvatar: null,
    hasWallet: false,
    rewardTypeSelection: [],
    spentTokens: null,
    wallet: null
}

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

const findUser = async (id: number) => {
    const user = await prisma.game.findUnique({
        where: {
            id
        }
    })
    console.log(user)
}

export const findAllUsers = async () => {
    const users = await prisma.user.findMany()
    console.log(users)
}

export const updateUsername = async (id: number, name: string) => {
    return await prisma.user.update({
        where: { id: id },
        data: {
            name: name,
            id: id
        }
    })
}

const deleteUser = async (id: number) => {
    await prisma.user.delete({
        where: { id: id }
    })
}

export const updateUser = async (user: User, id: number) => {
    await prisma.user.update({
        where: { id: id },
        data: user
    })
}

// a function that gets the user balance
export const getUserBalance = async (id: number) => {
    const user = await prisma.user.findUnique({
        where: { id: id }
    })
    return user?.balance
}

// a function that updates the users balance
export const updateUserBalance = async (id: number, balance: number) => {
    await prisma.user.update({
        where: { id: id },
        data: { balance: balance }
    })
}

// a function to buy tokens for the user
export const buyTokens = async (id: number, amount: number) => {
    //await chargeUSer(id, amount)
    const balance = await getUserBalance(id) || 0
    const new_balance =   balance + amount
    await updateUserBalance(id, new_balance)
}

// a function to pay ember tokens to buy a reward
export const buyReward = async (id: number, reward_id:number) => {
    const price = await getRewardPrice(reward_id) || 0
    const balance = await getUserBalance(id) || 0
    const new_balance =   balance - price
    await updateUserBalance(id, new_balance)
    await giveRewardToUser(id, reward_id)
}

// a function that updates the users brandSelection
export const updateBrandSelection = async (id: number, brandSelection: []) => {
    await prisma.user.update({
        where: { id: id },
        data: { brandSelection: brandSelection }
    })
}

// a function that updates the users rewardTypeSelection
export const updateRewardTypeSelection = async (id: number, rewardTypeSelection: []) => {
    await prisma.user.update({
        where: { id: id },
        data: { rewardTypeSelection: rewardTypeSelection }
    })
}

// a function that records that the user has played a game
export const updatePlayedGames = async (id: number, game_id: number) => {
    await prisma.user.update({
        where: { id: id },
        data: { playedGames: { connect: { id: game_id } } }
    })
}

// a function that creates a game ranking for the user based on the game type played


// OPTIONAL

// a function that updates the users earnedTokens
export const updateEarnedTokens = async (id: number, earnedTokens: number) => {
    await prisma.user.update({
        where: { id: id },
        data: { earnedTokens: earnedTokens }
    })
}

// a function that updates the users spentTokens
export const updateSpentTokens = async (id: number, spentTokens: number) => {
    await prisma.user.update({
        where: { id: id },
        data: { spentTokens: spentTokens }
    })
}


//a fonction that updates the users hasWallet to true
export const updatetoHasWallet = async (id: number) => {
    await prisma.user.update({
        where: { id: id },
        data: { hasWallet: true }
    })
}

// a function that updates the users wallet address
export const updateWallet = async (id: number, wallet: string) => {
    await prisma.user.update({
        where: { id: id },
        data: { wallet: wallet }
    })
}

