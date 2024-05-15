import React from 'react'
import { Link } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
import reactRouter from '../assets/react-router.svg'


function Home() {
  return (
    <ul className='flex justify-center text-center'>
      <li>
        <Link to={"hooks"} state={"Hooks page"} replace>
          <img src={reactLogo} className="logo react text-7xl" alt="React logo" />
        </Link>
        <h1 className='text-4xl mb-10'><b>React hooks</b></h1>
      </li>
      <li>
        <Link to={"library"} state={"Router example"} replace>
          <img src={reactRouter} className="logo router text-7xl" alt="React logo" />
        </Link>
        <h1 className='text-4xl mb-10'><b>React Router</b></h1>
      </li>
    </ul>
  )
}

export default Home