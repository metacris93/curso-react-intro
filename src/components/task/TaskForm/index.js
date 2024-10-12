import { TaskContext } from "../TaskContext";
import "./TaskForm.css"
import React, { useState } from "react";

function TaskForm() {
    const {
        addTask,
    } = React.useContext(TaskContext);
    const [taskName, setTaskName] = useState("");
    const onSubmit = (event) => {
        event.preventDefault();
        addTask(taskName);
        setTaskName("");
    };
    return (
        <form onSubmit={onSubmit}
        className="form form__column form--gap-1">
            <label className="form__item--left">Task Name</label>
            <input
                type="text"
                className="form__item--left"
                placeholder="Type the new task..."
                value={taskName}
                onChange={(event) => setTaskName(event.target.value)}
            />
            <button type="submit" className="form__item--left">Create Task</button>
        </form>
    );
}
export { TaskForm }
