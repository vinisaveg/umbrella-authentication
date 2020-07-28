import Server from "./src/server"

const server = new Server()

server
  .bootstrap()
  .then(() => {
    console.log("Server running 🔥")
  })
  .catch((error) => {
    console.log({ message: "Server failed to initialize.", error: error })
    process.exit(1)
  })
