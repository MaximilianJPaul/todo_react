import React, { useState, useEffect } from "react";

import './List.css';
import ListHeader from "./ListHeader";
import Task from "./Task";

const List = (props) => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const addTaskHandler = (event) => {
        setTask(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const todo = {
            task: task,
            done: false
        }

        setTasks(prevTasks => [...prevTasks, todo])
        setTask('');
    }

    return (
        <div className="list">
            <ListHeader title={props.title}/>
            <div className="list-tasks">
                {tasks.map(task => {
                    return <Task done={task.done} key={task.task} title={task.task}/>
                })}
                <form className="task-setter" onSubmit={onSubmitHandler}>
                    <input type="checkbox" name="task-done" className="task-done" />
                    <input type="text" autoComplete='off' value={task} name="set-task" className="set-task" placeholder="Write here..." onChange={addTaskHandler}/>
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
    )
}

export default List;