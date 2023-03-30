import Nav from "./Nav"
import TaskContainer from "./TaskContainer"
import AddTask from "./AddTask"

import io  from "socket.io-client"

//connect to server
const socket = io.connect("http://localhost:5000")

const Task = () => {
  return (
    <>
    <Nav />
    <AddTask socket={socket} />
    <TaskContainer  socket={socket} />
    </>
  )
}

export default Task