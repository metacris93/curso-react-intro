import { TaskItem } from "./TaskItem";
import { TaskList } from "./TaskList";
import { TaskSearch } from "./TaskSearch";
import { TaskCounter } from "./TaskCounter";
import { TaskHeader } from "./TaskHeader";
import React, { useState } from 'react';

function TaskPanel(props) {
    const [tasks, setTasks] = useState(() => {
        const tasksFromStorage = window.localStorage.getItem('tasks');
        if (tasksFromStorage) return JSON.parse(tasksFromStorage);
        return [];
    });
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

    return (
        <section>
            <TaskHeader />
            <TaskCounter completed={completedTasks} total={totalTasks} />
            <TaskSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <TaskList>
                {searchedTasks.map(todo => (
                    <TaskItem
                        key={todo.text}
                        id={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        onCompleteTask={onCompleteTask}
                    />
                ))}
            </TaskList>
        </section>
    );
}
export { TaskPanel }
