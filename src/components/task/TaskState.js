import "./Util.css";

function TaskState({ completed }) {
    return (
        <span className="mx-1 font--2"> { completed ? "✅" : "⭕" }</span>
    );
}
export { TaskState }
