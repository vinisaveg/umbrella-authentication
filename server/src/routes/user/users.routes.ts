import { Router, Request, Response } from "express"

import UserRepository from "../../repositories/UserRepository"
import CreateUser from "../../services/CreateUser.service"

const usersRouter = Router()

const usersRepository = new UserRepository()

usersRouter.get("/", (request: Request, response: Response) => {
  const users = usersRepository.collection

  return response.json({ users })
})

usersRouter.post("/", (request: Request, response: Response) => {
  const user = request.body

  const createUser = new CreateUser(usersRepository)

  createUser
    .run(user)
    .then((user) => {
      return response.status(200).json(user)
    })
    .catch((error) => {
      return response.status(400).json({ error: error.message })
    })
})

export default usersRouter
