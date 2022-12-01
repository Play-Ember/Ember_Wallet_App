import { any } from 'jest-mock-extended'
import { createUser } from '../api'

import { prismaMock } from '../singleton'

test('should create new user ', async () => {
  const user = {
    id: 156,
    name: 'lukeypen',
    createdAt: 1234,
    hasWallet: false,
    wallet: null,
    earnedTokens: null,
    spentTokens: null,
    balance: null
  }

  prismaMock.user.create.mockResolvedValue(user)

  await expect(createUser(user)).resolves.toEqual({
    id: 156,
    name: 'lukeypen',
    email: 'hnnnnnnnn',
    hasWallet: false,
    wallet: null,
    earnedTokens: null,
    spentTokens: null,
    balance: null,
    createdAt: 1234
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
