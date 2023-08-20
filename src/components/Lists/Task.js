import React, { useState } from "react";

import './Task.css';

const Task = (props) => {
    const [done, setDone] = useState(false);

    const onDoneHandler = (event) => {
        event.preventDefault();

        if (event.currentTarget.checked) {
            setDone(!done)
        }

        console.log(done)
    }

    return (
        <div className="task">
            <input type="checkbox" name="task-done" className="task-done" onChange={onDoneHandler}/>
            <p className="task-title">{props.title}</p>
        </div>
    )
}

export default Task;