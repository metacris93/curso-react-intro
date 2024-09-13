import { CreateTask } from "./components/task/CreateTask";
import { TaskProvider } from "./components/task/TaskContext";
import { TaskPanel } from "./components/task/TaskPanel";

function App() {
    return (
        <>
            <CreateTask />
            <TaskProvider>
                <TaskPanel />
            </TaskProvider>
        </>
    );
}

export default App;
