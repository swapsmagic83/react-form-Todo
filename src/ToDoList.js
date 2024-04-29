import React, { useState } from "react";
import {v4 as uuid } from "uuid"
import ToDo from "./ToDo";
import NewToDoForm from "./NewToDoForm";


const ToDoList =() =>{
    const initial_state =[]

    const [tasks,setTasks]= useState(initial_state)
    const addTask = (newTask) =>{
        setTasks(tasks =>[...tasks,{id:uuid(),...newTask}])
    }
    const removeTask = (id) =>{
        setTasks(tasks =>tasks.filter(task=>task.id !== id))
    }

    return (
        <>
        <h2>To Do List:</h2>
        <div><NewToDoForm addTask={addTask} /></div>
        
        <div>
            {tasks.map(task => 
            <ToDo 
            text={task.text} 
            id={task.id} 
            key={task.id}
            removeTask={removeTask}/>)}
        </div>
        </>
    )
}

export default ToDoList