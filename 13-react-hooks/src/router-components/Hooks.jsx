import React from 'react'
import { Link } from 'react-router-dom'

function Hooks() {
    let hookList = [
        "useEffect", "useRef", "useMemo", "useCallback", "useContext", "useReducer"
    ]
  return (
    <>
    {hookList.map(hook => 
      <div key={hook} className='w-full my-4'>
        <Link to={hook.slice(3)}>
          <div className=' text-left mx-3 p-3 bg-slate-600 text-3xl rounded-lg'>
              <span className='me-5'>⚛</span>
              <span>{hook}</span>
          </div>
        </Link>
      </div>
    )}
    </>
  )
}

export default Hooks