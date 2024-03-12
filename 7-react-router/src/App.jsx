import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  // <Outlet /> placeholder that implements any changes by child routes by keeping this layout intact
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
