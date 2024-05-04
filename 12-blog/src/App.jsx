import './App.css'
import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import authService from '../appwrite/auth'
import { login, logout } from '../store/authSlice'
import { Header, Footer } from '../components'
import { Outlet } from 'react-router-dom'

function App() {
	let [loading, setLoading] = useState(true)
	let dispatch = useDispatch()

	useEffect(() => {
		authService.getCurrentUser()
		.then((userData) => {
			if (userData) 
				dispatch(login({userData}))
			else 
				dispatch(logout())
		})
		.catch(() => console.log("Login failed"))
		.finally(() => setLoading(false))
	}, [])
	

  return !loading ? (
	<div className='min-h-screen flex flex-wrap content-between bg-gray-600'>
		<div className='w-full block'>
			<Header />
			<Outlet />
			<Footer />
		</div>
	</div>
  ) : null
}

export default App
