import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleCheck, faPen, faTrashCan} from '@fortawesome/free-solid-svg-icons'




export default function Todo (props){

    
    return (
        <>
        { props.todo.map((task)=>{
            return(
            <React.Fragment key={task.id}>
            <div className={task.isCompleted ? "task--completed":"task--notCompleted"}>
                <span className="task--content">{task.content}</span>
                <div className="icons">
                    <span title ="Completed" className="check--task" onClick={()=>props.completeTask(task.id)}><FontAwesomeIcon icon={faCircleCheck} /></span>
                    {task.isCompleted ? '':<span title ="Edit"className="edit--task" onClick={()=>props.setUpdateData({id:task.id, content:task.content, isCompleted:task.isCompleted})}><FontAwesomeIcon icon={faPen}/></span>}
                    <span title = "Delte"className="delet--task" onClick={()=>props.deleteTask(task.id)}><FontAwesomeIcon icon={faTrashCan}/></span>
                </div>
            </div>
            </React.Fragment>
        )
        
       })}
        </>
    )
}