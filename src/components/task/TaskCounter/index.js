import { TaskContext } from "../TaskContext";
import "./TaskCounter.css"
import React from 'react';

function TaskCounter() {
    const { totalTasks, completedTasks } = React.useContext(TaskContext);
    return (
        <h3>
            Has completado {completedTasks} de {totalTasks}
        </h3>
    );
}
export { TaskCounter }
