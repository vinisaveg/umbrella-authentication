import IRead from "../interfaces/IRead"
import IWrite from "../interfaces/IWrite"

abstract class BaseRepository<T> implements IRead<T>, IWrite<T> {
  readonly collection!: Array<T>

  constructor(collection: Array<T>) {
    this.collection = collection
  }

  // IRead
  async find(): Promise<Array<T>> {
    throw new Error("Method not implemented.")
  }

  async findOne<T>(): Promise<T> {
    throw new Error("Method not implemented.")
  }

  // IWrite
  async create(object: T): Promise<T> {
    return new Promise((resolve, reject) => {
      let newObject = this.collection.push(object)

      if (newObject) {
        resolve(object)
      }
    })
  }

  async update(id: string): Promise<T> {
    throw new Error("Method not implemented.")
  }

  async delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.")
  }
}

export default BaseRepository
