import Server from "./src/server"

const server = new Server()

server.bootstrap().then(() => {
  console.log("Server running 🔥")
})
