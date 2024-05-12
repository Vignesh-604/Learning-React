import React, { useEffect, useRef, useState } from 'react'

// useRef : used to store values without causing re-render (as opposed to useState )
// Also used to pass reference of an html element to fetch it's content and use other functions

function UseRef() {
    let [name, setName] = useState("")
    let count = useRef(1)

    useEffect(() => {++count.current})  // Increments everytime component is re-rendered

    let inputRef = useRef()   // Input box reference

    let refCount = useRef(0)
    let buttonRef = useRef()

  return (
    <div>
        <h1 className=' text-7xl mb-12'><b><u>useRef Hook</u></b></h1>

        <input 
        type="text" 
        className='text-4xl my-3' 
        value={name} 
        onChange={(e) => setName(e.target.value)}
        ref={inputRef}
        />
        <h1 className='text-5xl my-3'>You entered: {name}</h1>
        <h1 className='text-5xl my-3'>Render count: {count.current}</h1>
        <button 
          onClick={() => inputRef.current.focus()} 
          className='text-4xl bg-slate-600 m-5 p-3 rounded-lg'>
          Focus on textbox
        </button>
        <button 
          onClick={() => inputRef.current.value = "Random Value"} 
          className='text-4xl bg-slate-600 m-5 p-3 rounded-lg'>
          Insert Random Value
        </button>

        <hr />

        <div className='text-5xl m-5'>
          <span className=''>Counter without re-rendering: </span>

          <input 
          type='button'
          className=' bg-slate-600 p-1 rounded-lg text-center cursor-pointer'
            onClick={() => {
              ++refCount.current                            // Incrementing
              buttonRef.current.value = refCount.current    // Updating the value of button
            }}
            value={refCount.current}      // Intial value of ref counter
            ref={buttonRef}               // Passing the reference of button
            readOnly
            />
        </div>
           
    </div>
  )
}

export default UseRef