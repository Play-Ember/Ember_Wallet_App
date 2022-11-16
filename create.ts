import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

  const user = await prisma.user.create({
    data: {
      createdAt : new Date(),
      email: '',
      name: 'Alice',
      hasWallet : true, 
      wallet  : "0x1234567890",
      collectibles : {
        create : {
         id : 1,
        }
      },
      avatar : {
        create : {
          id : 1,
        }
      },

      avatarLevel : 1,
      earnedTokens : 1000,
      spentTokens : 100,
      balance : 900,
      lastLogin : new Date(),
      },
    }
  )

  console.log(user)
}
  main()
    .then(async () => await prisma.$disconnect())
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
      }
    )

