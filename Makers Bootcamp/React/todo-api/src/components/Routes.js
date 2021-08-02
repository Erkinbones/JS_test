import React from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import AddTodo from './AddToDo/AddTodo'
import Home from './Home/Home';
import Todolist from './TodoList/Todolist';




const Routes = () => {
    return (
        <BrowserRouter>
            <switch>
                <Route exact path ="/" component ={Home}></Route>
                <Route path = "/add" component = {AddTodo}></Route>
                <Route path = "/list" component = {Todolist}></Route>
            </switch>
        </BrowserRouter>
    );
};

export default Routes;