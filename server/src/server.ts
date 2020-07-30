import express from "express"
import { environment } from "./environment/environment"
import routes from "../src/routes/index.routes"
import mongoose from "mongoose"

class Server {
  application!: express.Application

  bootstrap(): Promise<express.Application> {
    return this.initializeDatabase().then(() => {
      return this.initialize()
    })
  }

  initialize(): Promise<express.Application> {
    return new Promise((resolve, reject) => {
      try {
        this.application = express()

        this.setupMiddlewares()

        this.setupRoutes()

        this.application.listen(environment.server.port, () => {
          resolve(this.application)
        })
      } catch (error) {
        reject(error)
      }
    })
  }

  setupMiddlewares(): void {
    this.application.use(express.json())
  }

  initializeDatabase(): Promise<typeof mongoose> {
    return mongoose.connect(environment.db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
  }

  setupRoutes(): void {
    this.application.use("/", routes)
  }
}

export default Server
