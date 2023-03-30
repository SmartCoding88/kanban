import { useRef } from "react"

const AddTask = () => {
    const taskRef = useRef(null)

    function handleSubmit(event) { 

        event.preventDefault()
        console.log(usernameRef.current.value)
        usernameRef.current.value = ""

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