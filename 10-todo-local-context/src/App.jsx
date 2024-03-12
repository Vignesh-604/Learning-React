import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { TodoProvider } from './context/TodoContext'
import { useState, useEffect } from 'react'

function App() {
    const [todos, setTodos] = useState([])

    // Gets the previous todos array, uses spread op to make them individual todo objects and appends new todo object
    // prev is array containing existing todo objects. Date.now() to get a random value for id
    // "...todo" is an object passed to addTodo containing {todo: todo} & using spread op to mixup with rest values
    // not using spread op will result in having a nested object
    const addTodo = (todo) => setTodos(prev => [{id: Date.now(),...todo, completed: false},...prev])
    
    // Searches the todos array for given condition and makes changes
    const updateTodo = (id, todo) => 
        setTodos((prev) => prev.map(                                            // prevTodo is each iterative obj of todos array
            prevTodo => prevTodo.id === id ? todo : prevTodo   //If id matches update todo or leave as it is
    )) // todo --> prevTodo.todo = todo

    // Filters and creates new array without specified id
    const deleteTodo = (id) => setTodos((prev) => prev.filter((prevTodos) => prevTodos.id !== id ))
 
    // Returns a new object representing the updated todo item replacing the old one
    // (...prevTodo) to copy all the properties of the previous todo item.
    const toggleComplete = (id) => setTodos(prev => prev.map(
        (prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo
    )) 

    // Gets old todos on page load
    useEffect(() => {
        // Gets todos from browser local storage by key name and stores them in todos state variable
        const todos = JSON.parse(localStorage.getItem("todos")) // fetched data is string

        // checks if todos JSON array is not empty and it's length > 0
        if (todos && todos.length) setTodos(todos) // the retrived todo data is sent to todos
    }, [])

    // Any changes to todos is stored into local storage
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))    // setting data in string format
    }, [todos])
    
    

  return (
  <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
  <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
              <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
              {todos.map(todo => (                          //iterates through todo objects and creates todo components
                <div key={todo.id} className='w-full'>
                    <TodoItem todo={todo}/>
                </div>
              ))}
          </div>
      </div>
  </div>
  </TodoProvider>
  )
}

export default App
