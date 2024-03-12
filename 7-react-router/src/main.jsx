import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact.jsx'
import User from "./components/users/User.jsx"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Github, { githubInfo } from './components/github/Github.jsx'

/* const router = createBrowserRouter([
  {
    path: "/",                // top level element
    element: <App />,
    children: [
      {
        path: "", element: <Home />
      },
      {
        path: "about", element: <About />
      },
      {
        path: "contact", element: <Contact />
      }
    ]

  }
]) */

// Nested Routing : define routes for different URLs and associate each URL with a specific component to render when that URL is visited.
const router = createBrowserRouter(         // For web applications
  createRoutesFromElements(
    <Route path='/' element= {<App/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route loader={githubInfo} path='github' element={<Github/>}/>
    </Route>
))
// "/" is the root component, '' is a catch-all route/ default route
// "/:userid" provided by the user can be access within component
// loader prop used to execute a async task or component call while rendering the given path component

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
