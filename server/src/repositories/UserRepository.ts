import BaseRepository from "./base/BaseRepository"
import { User } from "../models/user/User.model"

class UserRepository extends BaseRepository<typeof User> {
  constructor() {
    super()

    this.collection
  }

  countUsers(): number {
    return this.collection.length
  }

  async create(user: typeof User): Promise<any> {
    const newUser = await User.create(new User(user))

    return newUser
  }
}

export default UserRepository
