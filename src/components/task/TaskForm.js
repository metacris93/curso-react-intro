import "./TaskForm.css"
function TaskForm(props) {
    return (
        <form className="form form__column form--gap-1">
            <label className="form__item--left">Task Name</label>
            <input type="text" className="form__item--left" placeholder="Type the new task..." />
            <button type="button" className="form__item--left">Create Task</button>
        </form>
    );
}
export { TaskForm }
