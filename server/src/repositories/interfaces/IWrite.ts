interface IWrite<T> {
  create(object: any): Promise<any>
  update(id: string, object: T): Promise<T>
  delete(id: string): Promise<boolean>
}

export default IWrite
