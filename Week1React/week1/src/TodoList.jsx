import React, { useState } from "react";



function TodoList() {

    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")

    function handleChange(event) {
        setNewTask(event.target.value);
    }
    function addTask() {

        if(newTask !==''){
            setTasks(t => [...t, newTask])
        setNewTask('')
        }
        
    }
    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks)
    }


    return (
        <div className="to-do-list">

            <h1>To-Do-List</h1>

            <div>
                <input type="text" placeholder="Enter Task.." value={newTask} onChange={handleChange}/>

                <button className="add-button" onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task, index) =>
                <li key={index}> 
                    <span className="text">{task}</span>
                    <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                </li>)}
            </ol>
            
        </div>
    )
}
export default TodoList;