import React from "react";

export default function TodoForm (props) {

    return (
        < div className="add--task">
            <input type="text" className='task--input' placeholder="ex: Do Homework" onChange={(event)=>{props.setNewTask(event.target.value)}} 
             key={props.id}/>
             
            <button className='btn' onClick={props.addTask}>Add</button>
        </div>
    )
}