import { CreateTask } from "./components/task/CreateTask";
import { TaskPanel } from "./components/task/TaskPanel";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
    const {
        item: tasks,
        saveItem: setTasks,
        loading,
        error,
    } = useLocalStorage("tasks", []);
    return (
        <>
            <CreateTask />
            <TaskPanel
                tasks={tasks}
                setTasks={setTasks}
                loading={loading}
                error={error}
            />
        </>
    );
}

export default App;
