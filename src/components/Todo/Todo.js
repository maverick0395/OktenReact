import {useRef} from "react";

import {completedTodo, deleteTodo} from "../../store/todo.slice";
import css from "./Todo.module.css";


const Todo = ({todo, dispatch}) => {
    const todoInput = useRef();


    const checkTodoCompleted = (value) => {
            dispatch(completedTodo({todo: {...todo, completed: value}},));
    }


    return (
        <div className={css.todo_wrapper}>
            <input type="checkbox" checked={todo.completed} onChange={() => checkTodoCompleted(!todo.completed)} ref={todoInput}/>
            <h2 style={{textDecoration: todo.completed ? 'line-through': 'none' }}>{todo.name}</h2>
            <button onClick={() => dispatch(deleteTodo({id: todo.id}))}>Delete</button>
        </div>
    );
};

export {Todo};