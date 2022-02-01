import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: {
        todos: [],
        all: 0,
        completed: 0
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
            state.all++;
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
            state.all--;
        },
        completedTodo: (state, action) => {
            state.todos[state.todos.findIndex(todo => todo.id === action.payload.todo.id)] = {...action.payload.todo}
        }
    }
});

const todoReducer = todoSlice.reducer;

export const {addTodo, deleteTodo, completedTodo} = todoSlice.actions;

export default todoReducer;

