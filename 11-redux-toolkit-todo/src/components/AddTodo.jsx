import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'         // Dispatch uses reducer to change store
import { addTodo } from '../features/todo/todoSlice'

function Todos() {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()          // used to send data to store

    const addTodoHandler = (e) => {
      e.preventDefault()

      if (input != ""){               // If input field is empty do nothing
        dispatch(addTodo(input))      // dispatches a reducer that manages the state
        setInput("")
      }
    }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export default Todos