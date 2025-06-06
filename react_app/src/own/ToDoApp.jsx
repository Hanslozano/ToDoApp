import "./ToDoApp.css"
import { useState } from "react"

function ToDoList() {

    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")


    function handleInputTask(event) {
      setNewTask(event.target.value)
    }

    function addTask() {
        if (newTask.trim() !== "") {
        setTasks(t => [...t, newTask])
        setNewTask("");
        }
    }

    function deleteTask(index) {
        setTasks(tasks.filter((_, i) => i !== index))
    }

 

    return (

        <div className="ToDoApp">

        <h2 className="Title">To Do List</h2>

        <div className="Input">
            <input value={newTask} onChange={handleInputTask} placeholder="Enter a Task"  className="InputTask"/>
            <button className="AddButton" onClick={addTask}>Add Task</button>
        </div>
        
        <ol>
          {
            tasks.map((task, index) => <li key={index}>
                <span>{task}</span>

                <button className="delete" onClick={() => deleteTask(index)}>Delete</button>
                

                </li>

          )
          }

        </ol>

        </div>


    )

}

export default ToDoList