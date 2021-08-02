import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddTodo from '../AddToDo/AddTodo';
import Todolist from '../TodoList/Todolist';

const Home = () => {

   const AddToDoContext = React.createContext()

//    const [state, setState] = useState();

    return (
        <div>
            <AddToDoContext.Provider>
                <AddTodo/>
                <Todolist/>
            </AddToDoContext.Provider>
        </div>
    );
};

export default Home;