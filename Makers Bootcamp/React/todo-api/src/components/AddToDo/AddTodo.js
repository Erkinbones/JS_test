import React from 'react';
import { useState } from 'react';
import { useContext} from 'react';
import {ToDoContext} from '../context/ToDoContext'
const AddTodo = () => {
    const[inpVal,setinpVal] = useState("")
    
    const{addTask} = useContext(ToDoContext)

    function handleClick(){
        let newObj = {
            task:inpVal
        }
        addTask(newObj);
    }
    return (
        <div>
          <input type ="text" onChange={(e)=>setinpVal(e.target.value)}></input>
          <button onClick={handleClick}>Add</button>  
        </div>
    );
};

export default AddTodo;