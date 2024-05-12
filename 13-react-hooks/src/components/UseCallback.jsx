import React, { useState, useCallback, useMemo, useEffect } from 'react'

// useCallback : Memoization of functions
// It's similar to useMemo but instead of memoizing return values, it stores the entire function in cache
// The function is re-rendered only if the value in dependency array changes
// If dependancy array is empty, the function gets executed only at the inital rendering of the page
function CallbackComponent({heavy}){
    const [number, setNumber] = useState()
    console.log("COMOPONENT RENDERING");
    useEffect(() => {setNumber(heavy)},[heavy])
    return (
        <div>
            <h1>{number}</h1>
        </div>
    )
}

function UseCallback() {
    let [count, setCount] = useState(0);
    let [number, setNumber] = useState(0)

    const heavy = useCallback(() => {
        console.log("Slow Function Rendering");
        for (let i=0; i<2000000000; i++){}
        console.log("Slow Function Rendered");
        return number
    },[number])

    return (
        <div>
            <h1 className=' text-7xl mb-12'><b><u>useCallback Hook</u></b></h1>

            <h1 className='text-6xl'>Counter: {count}</h1>
            <button 
            onClick={()=>setCount(++count)}
            className='bg-gray-600 p-3 m-2 rounded-lg text-2xl'
            >Increment</button>

            <button 
            onClick={()=>setCount(--count)}
            className='bg-gray-600 p-3 m-2 rounded-lg text-2xl'
            >Decrement</button>

            <button 
            onClick={() => setNumber(++number)}
            className='bg-gray-600 p-3 m-2 rounded-lg text-2xl'
            >Heavy</button>

            <CallbackComponent heavy={heavy}/>
        </div>
    );
}
export default UseCallback