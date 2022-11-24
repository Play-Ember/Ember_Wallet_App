import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/* createUser('paul', true)
  const users = await
 */

  // const users =await findUsers()

async function main() {
  
  createUser('ppli', true)
  
  findUsers()
 
}


const createUser = async (name: string, hasWallet: boolean) => {
  await prisma.user.create({
    data: {
      name: name,
      hasWallet: hasWallet,
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


  main()
    .then(async () => await prisma.$disconnect())
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
      }
    )

