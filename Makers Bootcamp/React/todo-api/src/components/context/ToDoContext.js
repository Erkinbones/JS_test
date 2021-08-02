import React from "react";
import { useReducer } from "react";


export const ToDoContext = React.createContext()

const INIT_STATE = {
    todos:[]
}

const reducer  =(state = INIT_STATE,action)=>{
    switch(action){

    }
}


const ToDoContextProvider = ({children})=>
{
    const [state,dispatch] = useReducer(reducer,INIT_STATE)
    const addTask = (newTask) =>{
        console.log(newTask);
    }

    return (
        <ToDoContext.Provider value ={{addTask}}>
            {children}
        </ToDoContext.Provider>
    )
}

export default ToDoContextProvider;