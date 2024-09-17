import { CreateTask } from "./components/task/CreateTask";
import { TaskProvider } from "./components/task/TaskContext";
import { TaskPanel } from "./components/task/TaskPanel";

function App() {
    return (
        <>
            <TaskProvider>
                <CreateTask />
                <TaskPanel />
            </TaskProvider>
        </>
    );
}

export default App;
