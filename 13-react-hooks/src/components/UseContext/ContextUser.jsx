import React, { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'


function ContextUser() {
    let {dark, setDark} = useContext(ThemeContext)
  return (
    <div className={`
        ${dark ? "bg-slate-200 text-black" : "bg-slate-700 text-slate-200"} text-5xl p-3 rounded-lg`}>
        <h1 className='m-2'><b>Hello Context User</b></h1>
        <input 
            type='button'
            value={dark ? "🌚" : "🌞"}
            title='Toggle theme'
            onClick={() => setDark(!dark)}
            className={`p-2 rounded-3xl cursor-pointer`}    
        />
    </div>
  )
}

export default ContextUser