import { createContext, useContext } from "react";

// Todo context array with each todos as individual object
export const TodoContext = createContext({
    todos : [
        {id: 1, todo: "Todo msg", completed: false}
    ],
    addTodo : (todo) => {},
    updateTodo : (id, todo)=> {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}
})

// Custom hook to use TodoContext
export const useTodoContext = () => {
    return useContext(TodoContext)
}

// Wrapper component to use TodoContext
export const TodoProvider = TodoContext.Provider