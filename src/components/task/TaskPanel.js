import { TaskItem } from "./TaskItem";
import { TaskList } from "./TaskList";
import { TaskSearch } from "./TaskSearch";

const defaultTodos = [
    { text: 'Cortar cebolla', completed: false },
    { text: 'Cocinar', completed: false },
    { text: 'Lavar la ropa', completed: true }
]

function TaskPanel(props) {
    return (
        <section>
            <h1>Your tasks</h1>
            <h3>Completed 3 to 5</h3>
            <TaskSearch />
            <TaskList>
                {defaultTodos.map(todo => (
                    <TaskItem key={todo.text} text={todo.text} completed={todo.completed} />
                ))}
            </TaskList>
        </section>
    );
}
export { TaskPanel }
