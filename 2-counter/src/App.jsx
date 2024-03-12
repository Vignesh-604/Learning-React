import { useState } from 'react'
import './App.css'

function App() {
  // useState hook is used to change the state of DOM or UI
  // [variable, function] = setState(default_value)
  // function updates the variable and it's use in the UI 
  // useState updates the DOM if variable has been changed

  // Variable counter with default value 0 and setCounter is the function
  let [counter, setCounter] = useState(0)

  // it increments the value and useState updates it in the UI
  let increment = () => setCounter(++counter)
  let reset = () => setCounter(counter = 0)
  let decrement = () => {if (counter > 0) setCounter(--counter)}
  
  // State as a snapshot
  // For a render or state change, the state is fixed and only be changed after entire function has been executed
  let incrementBy2 = () => {
    setCounter(counter + 2)       // useState() send the updates in batches (using Fibre algo)
    setCounter(counter + 2)       // if the same method is repeated, it'll be only implemented once
    setCounter(counter + 2)       // all 3 setCounter has same initial counter value

    console.log(counter);     //Changes are made only after the entire onCLick function has been implemented even if it's a async func

    // while using a callback function, it is updated individually
    setCounter(previousCounter => previousCounter + 2)  // previousCounter : last updated state of counter
    setCounter(previousCounter => previousCounter + 2)  // callback function that updates the current counter value

  }

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Increase: {counter}</button>
      <button onClick={reset}>Reset: {counter}</button>
      <button onClick={decrement}>Decrease: {counter}</button>
      <hr/>
      <button onClick={incrementBy2}>Increment by 2</button>
    </>
  )
}

export default App
