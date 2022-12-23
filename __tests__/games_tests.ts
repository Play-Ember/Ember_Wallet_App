import { any } from 'jest-mock-extended'
import { gameDefaults, createGame } from '../Games_Api'
import { prismaMock } from '../singleton'

const title = "cards"
const id = 1261

const game = {...gameDefaults, title, id}

test('should create new game ', async () => {

  prismaMock.game.create.mockResolvedValue(game)

  await expect(createGame(title, id)).resolves.toEqual(game)
})

/* test('should update a users name ', async () => {

  prismaMock.game.update.mockResolvedValue(game)

  await expect(createGame(title, id)).resolves.toEqual(
    {...gameDefaults, id:id, title:title,}
  )
})  */


/* test('should list all users ', async () => {

  //prismaMock.user.update.mockResolvedValue()

  await expect(findAllUsers()).resolves.toEqual(user)
})  */
