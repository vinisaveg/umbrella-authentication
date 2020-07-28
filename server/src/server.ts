import express, { Request, Response } from "express"
import { environment } from "./environment/environment"
import routes from "../src/routes/index.routes"

class Server {
  application!: express.Application

  bootstrap(): Promise<Server> {
    return this.initialize()
  }

  initialize(): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        this.application = express()

        this.setupMiddlewares()

        // this.connectToDatabase()

        this.setupRoutes()

        this.application.listen(environment.server.port, () => {
          resolve(this.application)
        })

        resolve(this.application)
      } catch (error) {
        reject(error)
      }
    })
  }

  setupMiddlewares(): void {
    this.application.use(express.json())
  }

  connectToDatabase(): void {
    // Connect to MongoDB
  }

  setupRoutes(): void {
    this.application.use("/", routes)
  }
}

export default Server
