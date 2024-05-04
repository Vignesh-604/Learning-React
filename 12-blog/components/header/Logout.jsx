import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import authService from '../../appwrite/auth'

function Logout() {
    const dispatch = useDispatch()

    const logoutHandler = () => {
        authService.logout()                    // Delete Session
        .then(() => dispatch(logout()))         // Update state info 
    }
  return (
    <button
      className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
      onClick={logoutHandler}
    >Logout
    </button>
  )
}

export default Logout