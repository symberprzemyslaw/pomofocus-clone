import React, { useState } from "react";

const Tasks = () => {
    const [state, setState] = useState([]);
    
    const addTask = () => {
        const newTask = prompt('Enter a new task');
        if (newTask) {
            const newTasks = [...state, newTask];
            setState(newTasks);
        }
    }
    const deleteTask = (index) => {
        const newState = [...state]
        newState.splice(index, 1)
        setState(newState)
    }

    return (
        <div className="tasks">
            <div>
                <p>Tasks</p>
                <button>...</button>
            </div>
            {state.map((task, index) => (
                <div className="single-task" key={index}>
                    <p>
                    {task}
                    </p>
                    <button onClick={() => deleteTask(index)}>Delete</button>
                </div>
            ))}
            <button className="add-task-btn" onClick={addTask}>
                Add new task
            </button>
        </div>
    )
}

export default Tasks;
