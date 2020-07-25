import express, { Request, Response } from "express"
import { environment } from "./environment/environment"

class Server {
  application!: express.Application

  initialize(): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        this.application = express()

        // Setup middlewares

        this.application.listen(environment.server.port, () => {
          resolve(this.application)
        })

        // routes just for now...
        this.application.get("/", (request: Request, response: Response) => {
          response.send({ message: "Application Initialized." })
        })

        resolve(this.application)
      } catch (error) {
        reject(error)
      }
    })
  }

  bootstrap(): Promise<Server> {
    return this.initialize()
  }
}

export default Server
