import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {id: 1, text: "Redux Toolkit"}
    ]
}
// A "slice" in the context of Redux refers to a specific piece of your application's state and the related logic for managing that state
export const todoSlice = createSlice({
    name: 'todo',
    initialState,       //starting point for the data managed by the slice.
    reducers: {         //functions to specify how the state should change in response
        // state: initialState and action: parameters passed
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),           // used to create random ids
                text: action.payload    // to access the passed arguments
            }
            state.todos.push(todo)      // updating initial state
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        // Tried to make update function, didn't work - may fix later
        // updateTodo: (state, action) => {
        //     state.todos = state.todos.map(todo => todo.id === action.payload.id ? {...todo, text : action.payload.newText} : todo)
        // }
    }
})
// The functions that manipulate the state are called actions
// Reducers define functions that define how a state will be managed on call of a reducer function 
// Actions are the implementation of that reducer function in a component.
export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer    // exporting the reducer to store.js