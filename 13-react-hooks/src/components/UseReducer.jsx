import React, { useReducer, useState } from 'react'

// useReducer hook works similar to useState but is used for more complex state management
// const [state variable, dispatch] = useReducer(function to be called when dispatched, inital state value)
// reducer function takes 2 param state and action where action is the argument passed while calling dispatch
// reducer function can have multiple cases for multiple args
// dispatch can also send extra data (called payload) to be used in reducer function


function UseReducer() {
  // Counter
  function reducer(state, action) {
    switch (action) {
      case "increment" : return ++state
      case "decrement" : return --state
      default : return state
    }
  }
  const [state, dispatch] = useReducer(reducer, 0)

  // Todo
  const [todos, todoDispatch] = useReducer(todoReducer, [])
  const [todo, setTodo] = useState("")

  function todoReducer(todos, action){
    switch (action.func){
      case "add todo":
        if (action.payload && (action.payload.trim() !== ""))
          return todos.concat({id: Date.now(), task: action.payload, complete:false, edit: false})
      case "check":
        return todos.map(item => item.id === action.payload ? {...item, complete: !item.complete, edit:false} : item)
      case "toggle":
        return todos.map(item => item.id === action.payload ? {...item, edit: !item.edit}: item)
      case "edit":
        return todos.map(item => item.id === action.payload.id ? {...item, task: action.payload.task} :item)
      case "delete":
        return todos.filter(item => item.id !== action.payload)
    }
  }
  
  function handleSubmit(e) {
    e.preventDefault()
    todoDispatch({func: "add todo", payload: todo})
    setTodo("")
  }


  return (
    <div>
        <h1 className=' text-7xl mb-12'><b><u>useReducer Hook</u></b></h1>
        {/* Counter using reducer */}
        <div>
          <span className='text-4xl mx-5'>Counter using reducer: </span>

          <button className='text-5xl bg-slate-700 rounded-lg pb-3 px-2'
            onClick={() => dispatch("increment")}>+</button>

          <span className='text-5xl mx-5'>{state}</span>

          <button className='text-5xl bg-slate-700 rounded-lg pb-3 px-4'
            onClick={() => dispatch("decrement")}>-</button>
        </div>

        <hr className='my-4'/>
        {/* Todo using Reducer */}
        <div>
          <form onSubmit={handleSubmit}>
          <span className='text-4xl'>Enter Todo: </span>
            <input type="text" className=' text-4xl' value={todo} onChange={(e)=> setTodo(e.target.value)}/>
          </form>
          {
          todos.map(item => 
            <div key={item.id}
             className={`${item.complete?" bg-green-500":"bg-slate-600"} rounded-lg p-4 w-auto my-3 text-start`}>

              <input 
              type="checkbox" 
              className=' w-7 h-7 mr-3' 
              checked={item.complete} 
              onChange={() => todoDispatch({func: "check", payload: item.id})}
              />

              <button 
              className=' bg-slate-800 px-2 text-3xl rounded-lg me-3 disabled:opacity-70' 
              onClick={() => todoDispatch({func: "toggle", payload: item.id})}
              disabled={item.complete}
              title={item.edit ? "Save Todo" : "Edit Todo"}
              >
              {item.edit ? "📂" : "📝"}
              </button>

              <button 
              className=' bg-slate-800 px-2 text-3xl rounded-lg me-3' 
              onClick={() => todoDispatch({func: "delete", payload: item.id})}
              title='Delete Todo'
              >
              ❌
              </button>

              <input 
              type='text' 
              className='text-3xl bg-transparent' 
              value={item.task}
              onChange={e => todoDispatch({func: "edit", payload:{id: item.id, task: e.target.value}})}
              disabled={!item.edit}/>
            </div>
          )
          }
        </div>
    </div>
  )
}

export default UseReducer