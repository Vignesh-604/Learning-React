import React from 'react'
import { useParams, Outlet } from 'react-router-dom'

function Library() {

    let books = [
        {id: 1, name:"Cooking", available: true},
        {id: 2, name:"History", available: true},
        {id: 3, name:"Coding", available: false},
        {id: 4, name:"Physics", available: true},
        {id: 5, name:"Business", available: false},
    ]
    // Outlet renders all nested components and has access to outles context
  return (
    <div className=' bg-slate-500 p-3 rounded-lg mb-3'>
        <h1 className='text-6xl mt-4 mb-7'><b>📚Library📚</b></h1>
        <hr />
        
        <div className=' bg-gray-900 p-2 rounded-md'>
          <Outlet context={books}/>
        </div>
    </div>
  )
}

export default Library