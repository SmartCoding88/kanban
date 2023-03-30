const express = require('express')
const http = require('http')
const cors = require("cors");

const env = require('dotenv')
env.config()

const PORT = process.env.PORT || 5000;

const app = express()
app.use(cors())
app.use(express.json())

const server = http.createServer(app)



const { Server } = require("socket.io")

const io = new Server(server,  {
    cors: {
      origin: "http://localhost:8080",
      methods: ["GET", "POST"]
    }
  })

app.get("/", (req, res)=>{
    res.send("Hello there")
})

io.on('connection', (socket)=>{
    console.log(`A user connected: ${socket}`)
})

server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})