import React from 'react';
import {ITodo} from "./types";
import './todo.css'

interface ISingleTodo {
    todo: ITodo;
    handleSelect: (el:ITodo) => void
}
const Todo = ({todo, handleSelect}:ISingleTodo) => {

    return (
        <div onClick={() => handleSelect(todo)} className='todoBody' id='todo'>
            <p>{todo.id}</p>
            <p>{todo.title}</p>
            <p>{todo.description}</p>

            <input type="checkbox" checked={todo.status}/>
        </div>
    );
};

export default Todo;