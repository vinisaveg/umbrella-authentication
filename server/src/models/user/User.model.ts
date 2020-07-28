//  User mongoose schema
class User {
  id: string
  name: string
  email: string
  password: string

  constructor({ name, email, password }: Omit<User, "id">) {
    this.id = this.hashPassword()
    this.name = name
    this.email = email
    this.password = password
  }

  private hashPassword(): string {
    // Hash password with bcrypt
    return "hashedPassword"
  }
}

export default User
