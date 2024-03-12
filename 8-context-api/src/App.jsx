import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/ContextProvider'

function App() {
  
  // <UserContextProvider> acts as a wrapper that provides the access of UserContext to all children compnents
  return (
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
