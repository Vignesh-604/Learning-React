import { useState, useCallback, useRef } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [characters, setCharacters] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook : reference of an element from DOM ex. password input tag
  const passwordRef = useRef(null)

  // useCallback(() => {}, [array of dependencies])
  // Memoization: stores values in cache for optimisation
  // dependency array stores values which, on update, may affect the callback function
  // useCallback is for optimisation only - project can run without it
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (numbers) str += "1234567890"
    if (characters) str += "`~-_()[]{},.!@#$%^&+-*/"

    for (let i=1; i < length; i++) {
      let char = Math.round(Math.random() * (str.length - 1))
      pass += str[char]
    }
    setPassword(pass)
  }, [length, numbers, characters, setPassword])    //setPassword is for optimisation only- will work without as well
  // setPassword and not password because changes in password will trigger callback and it will go into infinite loop


  const copyPassword = useCallback(() => {
    // passwordRef.current?.select()                   // gives selected effect to entire string
    // passwordRef.current?.setSelectionRange(0,5)     // gives selected effect to only in-range string
    passwordRef.current.focus()
    // console.log(passwordRef);                    //gives input tag reference
    /// above code only gives effects - doesn't affect the copy process

    // React compiles in the browser thus we have access to the window object
    window.navigator.clipboard.writeText(password)      // copies to clipboard
  }, [password])

  
  // useEffect(() => {}, [dependancy array])
  // useEffect executes the function every time one of the dependancy values are updated 
  useEffect(() => passwordGenerator, [length, numbers, characters, passwordGenerator])

  return (
    <>
      <div className='max-w-2xl p-5 text-black bg-gray-500 rounded-3xl'>
      <h1 className='text-4xl m-3'>Random Password Generator</h1>
        <div className='flex overflow-hidden rounded mb-4'>
          {/* Password box */}
          <input type="text" 
          value={password} 
          readOnly 
          placeholder='Password' 
          className='outline-none w-full py-1 px-3 my-3 rounded-l-xl text-xl bg-gray-200'
          ref={passwordRef}
          />
          {/* Copy to clipboard */}
          <button className='outline-none bg-blue-600 text-white my-3 rounded-r-xl'
          onClick={copyPassword}>copy</button>
        </div>
        <div className='flex flex-wrap gap-x-5 text-xl'>
          {/* Length range selector slider */}
          <div className='flex flex-wrap items-center gap-x-1'>
            <input type="range" min={8} max={16} value={length} className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}/>
            <label>Length: {length}</label>
          </div>
          {/* Numbers checkbox */}
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numbers} onChange={() => setNumbers((prev) => !prev)}/>
            <label>Numbers</label>
          </div>
          {/* Characters checkbox */}
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={characters} onChange={() => setCharacters((prev) => !prev)}/>
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
