import { User } from "../models/user/User.model"
import UserRepository from "../repositories/UserRepository"

class CreateUser {
  private userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async run(user: typeof User): Promise<typeof User> {
    const newUser = await this.userRepository.create(user)

    return newUser
  }
}

export default CreateUser
