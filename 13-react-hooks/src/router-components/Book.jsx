import React, { useEffect } from 'react'
import { useNavigate, useOutletContext, useParams } from 'react-router-dom'

function Book() {
    let book = useOutletContext()           // use Outlet context passed by parent component
    let range = book.length

    let {id} = useParams()
    let navigate = useNavigate()
    let bookId = Number(id) - 1             // To match index of booklist (context)

    let valid = isNaN(bookId) || bookId < 0 || bookId >= range    // Is number and in range

    useEffect(() => {
      if (valid) navigate(-1)       //("..")  acts like back button
      })
    
    if (valid) return null

  return (
    <div className=' bg-slate-600 p-6 flex rounded-lg'>

      <span className=' text-11xl me-5'>📔</span>
      
      <span className='text-5xl py-10 text-start leading-tight'>
        <h1><b>Name: </b>{book[bookId].name}</h1>
        <h1><b>Book Id: </b>{book[bookId].id}</h1>
        <h1><b>Status: </b>
          {book[bookId].available ? "Available" : "Not Available"}
        </h1>
      </span>
    </div>
  )
}

export default Book