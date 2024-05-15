import React, { useRef } from 'react'
import { Link, useOutletContext, useNavigate, useSearchParams } from 'react-router-dom'

function BookList() {
    let booklist = useOutletContext()
    let input = useRef()
    let navigate = useNavigate()
    let range = booklist.length

    // let [search, setSearch] = useSearchParams()
    // let id = search.get("id")
    
    function searchId() {
      let id = input.current.value
      if (id <= range && id > 0) navigate(id)     // navigates to the input
      else input.current.value = ""               // if not in range , clears the input
    }
  
  return (
    <div>
      <div className='grid grid-cols-10 p-3'>
        <Link to={"add"} className='w-full col-span-4'>
          <div className=' text-left mx-3 p-3 bg-slate-600 text-3xl rounded-lg'>
              📝Add Book
          </div>
        </Link>

        <div className='col-span-6 text-left p-3 bg-slate-600 text-3xl rounded-lg'>
            <label htmlFor="id">Search by Book Id:&nbsp;</label>
            <input 
            type="number" id='id'ref={input}
            //value={id} onChange={(e) => setSearch({id: e.target.value})}
            className=' w-24 px-3 rounded-lg me-3' 
            min={1} max={range}
           />

            <button className=' -my-2 text-4xl' title='Search for book' onClick={searchId}>🔍</button>
        </div>

      </div>
      <hr />
      
      {booklist.map(book => 
        <div key={book.id} className='w-full my-3'>
          <Link to={String (book.id)}>
          <div className=' text-left mx-3 p-3 bg-slate-600 text-3xl rounded-lg'>
              <span className='me-5'>{book.available ? "📗" : "📕"}</span>
              <span>{book.name}</span>
          </div>
          </Link>
        </div>
      )}
    </div>

    
  )
}

export default BookList