import {useDispatch, useSelector} from "react-redux";

import {Form} from "../Form/Form";
import {Todo} from "../Todo/Todo";
import css from "./Todos.module.css";

const Todos = () => {
    const {todos, all, completed} = useSelector(state => state['todoReducer']);
    const dispatch = useDispatch();


    return (
        <div className={css.wrapper}>
            <h1>All: {all}</h1>
            <h1>Completed: {todos.filter(todo => todo.completed).length}</h1>
            <Form dispatch={dispatch}/>
            {todos && todos.map(todo => <Todo key={todo.id} todo={todo} dispatch={dispatch}/>)}
        </div>
    );
};

export {Todos};