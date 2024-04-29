import React from "react";

const ToDo = ({id, text, removeTask}) =>{
    
    return (
     
            <div>
    
            {text}<button onClick={()=>removeTask(id)}>Remove</button> 
           
           
           </div>
    )
}

export default ToDo