import React, {useState} from "react";

const NewToDoForm = ({addTask}) =>{

    const initial_state = {text:""}
    const [formData,setFormData] =useState(initial_state)
    const handleChange = (e) =>{
        const {name,value} = e.target
        setFormData(formData =>({
            ...formData,
            [name]:value
        }))
    }
    const handleSubmit =(e) =>{
        e.preventDefault()
        addTask({...formData})
        setFormData(initial_state)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="text">Task</label>
            <input
            id="text"
            type="text"
            name="text"
            value={formData.text}
            placeholder="Enter task here"
            onChange={handleChange}></input>
            <button>Add</button>
        </form>
    )
}

export default NewToDoForm