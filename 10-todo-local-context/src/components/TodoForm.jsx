import React from 'react'
import { useState } from 'react';
import { useTodoContext } from '../context/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodoContext()

    const add = (e) => {
        e.preventDefault()

        if (!todo) return
        //The passed object contains a property named todo with the current value of the todo state variable. {todo: todo}
        addTodo({todo})             // if key and value have same name, no need to write in key-value pair form
        setTodo("")          // clearing todo state value after adding it to local storage and empties the input field
    }

    return (
        <form  className="flex" onSubmit={add}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-screen border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo} //Sets the value of todo in the input field ("" empty string by default)
                onChange={e => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

