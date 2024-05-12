import React, { useEffect, useState } from 'react'

// useEffect : Function that is called on change of a state
// When value of dependency array changes, function is executed
// When dependency array is empty, the function executes once when component mounts (initial render)
// No mention of array: useEffect(() => {}) --> triggers at every re-render
// The return callback function acts like a cleanup
// which means the next time the function is executed the code in the return callback function is executed before the main function

function UseEffect() {
  let [color, setColor] = useState("neutral")
  
  useEffect(() => console.log("Inital Render Complete"), [])
  
  // console.log("RENDERING");
  
  useEffect(() =>{
    console.log("Re-render")
    
    return () => console.log("Cleanup!!")
  }, [color])
  

  // Window resizing
  let [size, setSize] = useState(window.innerWidth)
  const resize = () => setSize(window.innerWidth)

  useEffect(() =>{
    window.addEventListener("resize", resize)
    console.log("Added Event Listener")

    // Removes the event listener and applies it again if the entire component re-renders
    return () => {
      console.log("Removing Event Listener");
      window.removeEventListener("resize", resize)
    }
  }, [])
  
  return (
    <div>
    <h1 className=' text-7xl mb-12'><b><u>useEffect Hook</u></b></h1>

    <div className= {`bg-${color}-600 rounded-xl p-3`}>
        <button 
          onClick={() => setColor("green")}
          className='bg-gray-600 p-3 m-2 rounded-lg text-2xl border-2'
          >GREEN
        </button>
        <button 
          onClick={() => setColor("red")}
          className='bg-gray-600 p-3 m-2 rounded-lg text-2xl border-2'
          >RED
        </button>
        <button 
          onClick={() => setColor("yellow")}
          className='bg-gray-600 p-3 m-2 rounded-lg text-2xl border-2'
          >YELLOW
        </button>
        <h1 className='text-4xl'><b>Window width: {size}</b></h1>
    </div>


    </div>
  )
}

export default UseEffect