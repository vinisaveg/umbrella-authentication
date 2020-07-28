interface IRead<T> {
  find(): Promise<Array<T>>
  findOne<T>(id: string): Promise<T>
}

export default IRead
