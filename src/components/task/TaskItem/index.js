import "../../../shared/styles/Card.css"
import "../../../shared/styles/Util.css"
import "./TaskItem.css"
import { DeleteTask } from "../DeleteTask";
import { TaskState } from "../TaskState";
function TaskItem({ id, text, completed, onCompleteTask }) {
    return (
        <li className="my-1">
            <div className="card card__items--center">
                <TaskState completed={completed} />
                <p className="my-1">{ text }</p>
                <DeleteTask />
                {
                    !completed ? <button type="button" onClick={() => onCompleteTask(id)} className="btn btn-primary">&#10003;</button> : null
                }
            </div>
        </li>
    );
}
export { TaskItem }
