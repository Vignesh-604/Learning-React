import React, { useRef, useState } from 'react'
import { useOutletContext } from 'react-router-dom'

function AddBook() {
    let booklist = useOutletContext()

    const refName = useRef()
    const refCheck = useRef()

    function handleSubmit(e){
        e.preventDefault()
        let name = refName.current.value = ""
        // let id = booklist[booklist.length-1].id + 1
        let status = refCheck.current.checked = false

        console.log("Book added");
        // setBooklist(prev => [...prev, {id, name, available:status}])    // doesn't work
    }
    // added text-11xl in tailwind config file
  return (
    <>
        <h1 className='text-5xl'>Add new book</h1>
        <div className=' bg-slate-600 p-6 flex m-3 rounded-md'>

            <span className=' text-11xl me-5'>📖</span>
            
            <span className='text-5xl py-10 text-start leading-relaxed'>
                <form onSubmit={handleSubmit}>
                    <h1><b>Name: </b>
                        <input 
                        type="text" 
                        className=' bg-slate-500 rounded-md text-4xl'
                        ref={refName}
                        />
                    </h1>
                    <h1><b>Available: </b>
                        <input type="checkbox" className='w-10 h-10' ref={refCheck}/>
                    </h1>
                    <button 
                    type="submit" 
                    className=' bg-lime-700 rounded-lg px-4 py-1 text-4xl'>
                        Add Book
                    </button>
                </form>
            </span>
        </div>
    </>
  )
}

export default AddBook