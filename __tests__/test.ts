import { any } from 'jest-mock-extended'
import { createUser } from '../Users_Api'

import { prismaMock } from '../singleton'

test('should create new user ', async () => {
 const user = {
    balance: null,
    name: 'nunu',
    brandSelection: [],
    earnedTokens: null,
    hasAvatar: null,
    hasWallet: false,
    id: 310,
    rewardTypeSelection: [],
    spentTokens: null,
    wallet: null
  } 

  prismaMock.user.create.mockResolvedValue(user)

  await expect(createUser("nunu", 310)).resolves.toEqual({
    "balance": null,
    "brandSelection": [],
    "earnedTokens": null,
    "hasAvatar": null,
    "hasWallet": false,
    "id": 310,
    "name": "nunu",
    "rewardTypeSelection": [],
    "spentTokens": null,
    "wallet": null,
  })
})
/* 
test('should update a users name ', async () => {
  const user = {
    id: 1,
    name: 'Vlad',
    email: 'hello@prisma.io',
    createdAt: new Date(),
    hasWallet: true,
    wallet: '0x123',
    earnedTokens: 0,
    spentTokens: 0,
    balance: 0,
  }

  prismaMock.user.update.mockResolvedValue(user)

  await expect(updateUsername(user)).resolves.toEqual({
    id: 1,
    name: 'Vlad',
    email: 'hello@prisma.io',
  })
}) */
