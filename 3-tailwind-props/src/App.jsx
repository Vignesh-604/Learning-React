import './App.css'
import Card from './Card'

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Passing Props</h1>
      
      <Card name="Debby" status="Employed"/>  
      <Card name="Funny"/>
    </>
  )
}

export default App
