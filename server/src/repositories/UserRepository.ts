import BaseRepository from "./base/BaseRepository"
import User from "../models/user/User.model"

class UserRepository extends BaseRepository<User> {
  countUsers(): number {
    return this.collection.length
  }
}

export default UserRepository
