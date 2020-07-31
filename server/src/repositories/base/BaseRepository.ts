import IRead from "../interfaces/IRead"
import IWrite from "../interfaces/IWrite"

abstract class BaseRepository<T> implements IRead<T>, IWrite<T> {
  collection!: Array<T>

  // IRead
  async find(): Promise<Array<T>> {
    throw new Error("Method not implemented.")
  }

  async findOne<T>(): Promise<T> {
    throw new Error("Method not implemented.")
  }

  // IWrite
  create(object: T): Promise<any> {
    throw new Error("Method not implemented.")
  }

  async update(id: string): Promise<T> {
    throw new Error("Method not implemented.")
  }

  async delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.")
  }
}

export default BaseRepository
