import React, { useState } from 'react';
import { useLocalStorage } from "../../../hooks/useLocalStorage";

const TaskContext = React.createContext();

function TaskProvider({ children }) {
    const {
        item: tasks,
        saveItem: setTasks,
        loading,
        error,
    } = useLocalStorage("tasks", []);
    const [searchValue, setSearchValue] = useState("");
    const completedTasks = tasks.filter(task => !!task.completed).length;
    const totalTasks = tasks.length;
    const searchedTasks = tasks.filter(task => task.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
    
    const onCompleteTask = (id) => {
        const index = tasks.findIndex(task => task.id === id);
        if (index === -1) return;
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        setTasks(newTasks);
    }
    const deleteTask = (task) => {
        const index = tasks.findIndex(t => t.id === task.id);
        if (index === -1) return;
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        <TaskContext.Provider
            value={{
                loading,
                error,
                totalTasks,
                searchValue,
                setSearchValue,
                searchedTasks,
                completedTasks,
                onCompleteTask,
                deleteTask
            }}
        >
            {children}
        </TaskContext.Provider>
    );
}

export { TaskContext, TaskProvider };
