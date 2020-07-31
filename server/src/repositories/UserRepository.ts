import BaseRepository from "./base/BaseRepository"
import { User } from "../models/user/User.model"

class UserRepository extends BaseRepository<typeof User> {
  async create(user: typeof User): Promise<any> {
    const newUser = await User.create(new User(user))

    return newUser
  }

  async find(): Promise<any> {
    const users = await User.find()

    return users
  }
}

export default UserRepository
