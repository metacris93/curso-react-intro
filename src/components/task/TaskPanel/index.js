import { TaskItem } from "../TaskItem";
import { TaskList } from "../TaskList";
import { TaskSearch } from "../TaskSearch";
import { TaskCounter } from "../TaskCounter";
import { TaskHeader } from "../TaskHeader";
import React from 'react';
import { TasksLoading } from "../TasksLoading";
import { TasksError } from "../TasksError";
import { EmptyTasks } from "../EmptyTasks";
import { TaskContext } from "../TaskContext";
import { Modal } from "../../modal";

function TaskPanel() {
    const {
        loading,
        error,
        searchedTasks,
        onCompleteTask,
        openModal,
        setOpenModal,
        onDeleteTask,
    } = React.useContext(TaskContext);
    return (
        <section>
            <TaskHeader />
            <TaskCounter />
            <TaskSearch />
            <TaskList>
                {loading && (
                    <>
                        <TasksLoading />
                        <TasksLoading />
                        <TasksLoading />
                    </>
                )}
                {error && <TasksError />}
                {(!loading && searchedTasks.length === 0) && <EmptyTasks />}
                {searchedTasks.map(task => (
                    <TaskItem
                        key={task.text}
                        id={task.id}
                        text={task.text}
                        completed={task.completed}
                        onCompleteTask={onCompleteTask}
                        onDeleteTask={onDeleteTask}
                    />
                ))}
            </TaskList>
            {
                openModal && (
                    <Modal>
                        La funcionalidad de agregar TODO
                    </Modal>
                )
            }
        </section>
    );
}
export { TaskPanel }
