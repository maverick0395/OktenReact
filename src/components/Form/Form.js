import {useRef} from "react";

import {addTodo} from "../../store/todo.slice";

const Form = ({dispatch}) => {
    const todoInput = useRef();

    const submit = (e) => {
      e.preventDefault();
      e.target.reset();
    }

    const createTodo = () => {
        dispatch(addTodo({id: new Date().getTime(), name: todoInput.current.value, completed: false}))
    }
    return (
        <div>
            <form onSubmit={submit}>
                <input type="text" placeholder={"Type your todo task"} ref={todoInput}/>
                <button onClick={createTodo}>Add</button>
            </form>
        </div>
    );
};

export {Form};