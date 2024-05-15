import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

function Header() {
    let location = useLocation()
    let home = location.pathname === "/"        // currrent location
    // console.log(location);

    let data = location.state                   // State passed in Link, NavLink while routing
    console.log(data);

    if (home) return <h1 className='text-7xl mb-10'><b><u>React hooks and React Router</u></b></h1>

    // replace : skips the recent path
    // end : to stop propogating styles to nested child components
    // reloadDocumeant : reloads
    // state : to pass data to child components
    return (
        <>
        <div className='grid grid-cols-10 mb-5'>
            
            <h1 className='text-4xl col-span-7 text-left mx-4'><b>
                <NavLink to={"/"} state={"Home"} replace>
                    React hooks and React Router
                </NavLink>
            </b></h1>

            <nav className=' text-3xl col-span-3'>
                <NavLink to={"hooks"} state={"Hooks Page"} replace          
                    className={({isActive}) => ` mx-3 ${isActive ? "text-blue-400" : {}}`}
                >
                    Hooks
                </NavLink>
                
                <NavLink to={"library"} state={"Router Example"} replace end    
                    className={({isActive}) => `mx-3 ${isActive ? " text-red-600" : {}}`}
                >
                    Router
                </NavLink>
            </nav>
        </div>
        <hr />
        </>
    )
}

export default Header