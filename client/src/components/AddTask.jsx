import { useRef } from "react"

const AddTask = ({ socket }) => {
    const taskRef = useRef(null)

    function handleSubmit(event) { 

        event.preventDefault()
        socket.emit("createTask",taskRef.current.value)
        taskRef.current.value = ""

    }

    return (
        <form
            className="form__input"
            onSubmit={handleSubmit}
        >
            <label htmlFor="task">Task</label>
            <input type="text"
                name="task"
                id="task"
                className="input"
                required
                ref={taskRef}
            />
            <button className="addTodoBtn">ADD TASK</button>
        </form>
    )
}

export default AddTask