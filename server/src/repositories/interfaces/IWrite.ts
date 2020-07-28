interface IWrite<T> {
  create(object: T): Promise<T>
  update(id: string, object: T): Promise<T>
  delete(id: string): Promise<boolean>
}

export default IWrite
