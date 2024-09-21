import React, {useState} from "react";
import styles from './ToDoList.module.css'


function ToDoList()
{
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    
    const handleNewTask = (event)=>{
        setNewTask(event.target.value);
    }
  
    const addNewTask =()=>
    {
      if(newTask.trim() !== "")
      {
        setTasks(t => [...t, newTask]);
        setNewTask("");
      }
    };

    const deleteTask = (index)=>
    {
        const updatedTasks  = tasks.filter((_, i) => i !==index);
        setTasks(updatedTasks);
    }

    const moveUp = (index)=>
    {
        if(index>0)
        {
            let updatedTasks = [...tasks];
            let temp = updatedTasks[index];
            updatedTasks[index] = updatedTasks[index-1];
            updatedTasks[index-1] = temp;

            setTasks(updatedTasks);



        }
    }

    const moveDown = (index)=>
    {
        if(index<tasks.length-1)
            {
                let updatedTasks = [...tasks];
                let temp = updatedTasks[index];
                updatedTasks[index] = updatedTasks[index+1];
                updatedTasks[index+1] = temp;
    
                setTasks(updatedTasks);
    
    
    
            }
    }


    return <div className={styles.container}>

        <h1>To-Do-List App</h1>
        <input type="text" placeholder="Enter Task" id="taskInput" value={newTask} onChange={(event)=>handleNewTask(event)}></input>
        <button onClick={addNewTask} className={styles.addTaskButton}> Add Task</button>

        <ol>
            {(tasks.map((task, index) => 
            
                <li key={index}>
                <span className={styles.text}>{task}</span> 
                <button className={styles.upButton} onClick={()=>moveUp(index)}>⬆️</button>
                <button className={styles.downButton} onClick={()=>moveDown(index)}>⬇️</button>
                <button onClick={()=>deleteTask(index)} className = {styles.deleteButton}>Delete</button>
                </li>
                
            ))}
        </ol>
    </div>
}

export default ToDoList
