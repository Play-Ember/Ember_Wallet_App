import { any } from 'jest-mock-extended'
import { userDefaults, createUser, updateUsername, findAllUsers } from '../Users_Api'
import { prismaMock } from '../singleton'

const name = "larry"
const id = 45

const user = {...userDefaults, name, id}

test('should create new user ', async () => {

  prismaMock.user.create.mockResolvedValue(user)

  await expect(createUser(name, id)).resolves.toEqual(user)
})

test('should update a users name ', async () => {

  prismaMock.user.update.mockResolvedValue(user)

  await expect(updateUsername(id, name)).resolves.toEqual(
    {...userDefaults, id:id, name:name,}
  )
}) 


/* test('should list all users ', async () => {

  //prismaMock.user.update.mockResolvedValue()

  await expect(findAllUsers()).resolves.toEqual(user)
})  */
