const express = require('express')
const http = require('http')
const cors = require("cors");

const env = require('dotenv')
env.config()

const PORT = process.env.PORT || 3001;

const app = express()
app.use(cors())
app.use(express.json())

const server = http.createServer(app)

const generateID = () => Math.random().toString(36).substring(2, 15)

const tasks = {
    pending: {
        title: "pending",
        items: [
            {
                id: generateID(),
                title: "Send the Figma file to Dima",
                comments: [],
            },
        ],
    },
    ongoing: {
        title: "ongoing",
        items: [
            {
                id: generateID(),
                title: "Review GitHub issues",
                comments: [
                    {
                        name: "David",
                        text: "Ensure you review before merging",
                        id: generateID(),
                    },
                ],
            },
        ],
    },
    qc: {
        title: "qc",
        items: [
            {
                id: generateID(),
                title: "QC issues",
                comments: [
                    {
                        name: "Emma",
                        text: "Ensure you review before merging",
                        id: generateID(),
                    },
                ],
            },
        ],
    },
    completed: {
        title: "completed",
        items: [
            {
                id: generateID(),
                title: "Create technical contents",
                comments: [
                    {
                        name: "Dima",
                        text: "Make sure you check the requirements",
                        id: generateID(),
                    },
                ],
            },
        ],
    },
}

const { Server } = require("socket.io")

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173"
    }
})

app.get("/api", (req, res) => {
    res.send(tasks)
})

io.on('connection', (socket) => {
    console.log(`${socket.id} A user connected`)

    socket.on("taskDragged", (data) => {
		const { source, destination } = data;
		const itemMoved = {
			...tasks[source.droppableId].items[source.index],
		};
		console.log("ItemMoved>>> ", itemMoved);
		tasks[source.droppableId].items.splice(source.index, 1);
		tasks[destination.droppableId].items.splice(
			destination.index,
			0,
			itemMoved
		);
		console.log("Source >>>", tasks[source.droppableId].items);
		console.log("Destination >>>", tasks[destination.droppableId].items);
		socket.emit("tasks", tasks);
	});

    socket.on('disconnect', ()=>{
        socket.disconnect();
        console.log(`${socket.id} A user disconneted `)
    })
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})