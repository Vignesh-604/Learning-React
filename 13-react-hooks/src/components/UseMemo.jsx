import React,{ useState, useMemo }  from 'react'
import { useEffect } from 'react'

// useMemo --> Memoization
// Everytime a state is changed, React re-renders the entire page (even functions who's state hasn't changed)
// IF there's a function that takes too much time to load or process (ex. looping a long array), that may slow down the rendering process
// To avoid re-rendering a slowFunction process when other states change, useMemo is used.
// useMemo takes values that are involved in the wrapped function so that the function is executed only when that value is changed
// If the value doesn't change, it returns the current state without having to execute the entire function again

// Below example has a toggle button to change button color and an increment value that displays the increment value after the for-loop
// For-loop takes some time to finish which slows down the rendering of page
// To avoid execution of slowFunction when toggle is pressed, useMemo is used so it only gets executed when increment button is pressed
function UseMemo() {
	let [count, setCount] = useState(0) 
	const [toggle, setToggle] = useState(true)
	
	function slowFunction(){
		for (let i=0; i<500000000; i++){}
		return count
	}

	const value = useMemo(() => slowFunction(), [count])

	useEffect(() => console.log("Toggled!!"),[toggle])

  return (
    <div>
      <h1 className=' text-7xl mb-12'><b><u>useMemo Hook</u></b></h1>
			<button 
				className={`${toggle ? "bg-green-700" : "bg-red-800"} p-3 rounded-lg text-3xl mx-3`} 
				onClick={() => setToggle(!toggle)}
			>Toggle
			</button>

			<button 
				className='bg-gray-600 p-3 rounded-lg text-3xl mx-3' 
				onClick={() => setCount(++count)}
			>Increment</button>

      <span className=' text-5xl'>{value}</span>
    </div>
  )
}

export default UseMemo