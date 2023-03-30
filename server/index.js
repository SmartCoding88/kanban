const express = require('express')
const http = require('http')

const env = require('dotenv')
env.config()

const PORT = process.env.PORT || 3000;
const app = express()
const server = http.createServer(app)
const { Server } = require("socket.io")

const io = new Server(server)

app.get("/", (req, res)=>{
    res.send("Hello there")
})

io.on('connection', (socket)=>{
    console.log(`A user connected: ${socket}`)
})

server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})