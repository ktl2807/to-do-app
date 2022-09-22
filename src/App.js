import './App.css';
import React from 'react';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';
import Jokes from './components/Jokes';
import UpdateForm from './components/UpdateForm';

function App() {

  const [todo, setTodo] = React.useState([])

  //temp state
  const [newTask, setNewTask] = React.useState('')
  const [updateData, setUpdateData] = React.useState('')
  
  
  //add task function
  const addTask = function (){
   if (newTask){
      let idNum = todo.length + 1;
      let newObj = {id:idNum, content: newTask, isCompleted: false}
      setTodo([...todo, newObj])
      setNewTask('');
   }else{
    alert("Enter a Task!")
    return;
   }
   
  }
  
  //delete task function
  const deleteTask = function (id){
    let newTodoList = todo.filter(task=> task.id !== id)
    setTodo(newTodoList)
       
  }

  //edit task function
  const editTask = function (event){
    let editedObj = {
      id: updateData.id,
      content:event.target.value,
      isCompleted:updateData.isCompleted ? true: false
    }
    setUpdateData(editedObj);
    
  }
  //update task function
  const updateTask = function (id){
   let updatedList = todo.map(task=>{
    if(task.id === id){
      return updateData
    }
    return task
   })
    setTodo(updatedList)
    setUpdateData('');
  }
  //cancel update task function
  const cancelUpdateTask = function (){
    setUpdateData('')
  }

  //complete task function
  const completeTask = function (id){
    let obj = todo.map(task=>{
      if(task.id===id){
        return ({id:task.id, content: task.content, isCompleted: !task.isCompleted})
      }
      return task
    })
    setTodo(obj)
    }

  return (
    
    <div className="App">
     <h1 className='title'>What do you have to do today</h1>
    {updateData ?  <UpdateForm 
        todo={todo}
        updateData = {updateData}
        updateTask={updateTask}
        editTask= {editTask}
        cancelUpdateTask={cancelUpdateTask}
        /> : <TodoForm 
        todo={todo}
        setNewTask={setNewTask}
        addTask={addTask}
        />} 
    
    
    <Todo 
        todo= {todo}
        completeTask={completeTask}
        updateData = {updateData}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
     /> 
    <Jokes />
   
    </div>
   
  );
}


export default App;
