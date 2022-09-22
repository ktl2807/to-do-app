import React from "react";

function UpdateForm (props){
    return (
        <div className="add--task">
            <input className='task--input' type="text" value={props.updateData && props.updateData.content} onChange={(event)=>props.editTask(event)}/>
            <button className='btn' onClick={()=>props.updateTask(props.updateData.id)}>update</button>
            <button className='btn'onClick={()=>props.cancelUpdateTask()}>cancel</button>
        </div>
    )

}

export default UpdateForm;