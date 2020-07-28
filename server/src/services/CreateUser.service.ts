import User from "../models/user/User.model"
import UserRepository from "../repositories/UserRepository"

class CreateUser {
  private userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  run(user: User): Promise<User> {
    const newUser = this.userRepository.create(user)

    return newUser
  }
}

export default CreateUser
