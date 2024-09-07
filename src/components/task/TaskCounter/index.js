import "./TaskCounter.css"
function TaskCounter({ total, completed }) {
    return (
        <h3>
            Has completado {completed} de {total}
        </h3>
    );
}
export { TaskCounter }
