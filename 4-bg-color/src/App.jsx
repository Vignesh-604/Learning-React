import { useState } from 'react'


function App() {
  let [color, setColor] = useState("gray")

  return (

      <div className='w-screen h-screen' style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-1 inset-x-0 px-2 '>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg border-spacing-10 bg-slate-600 p-3 rounded-3xl'>
            <button onClick={()=> setColor("red")} className='outline-none rounded-3xl' style={{backgroundColor:"red"}}>Red</button>
            <button onClick={()=> setColor("green")} className='outline-none rounded-3xl' style={{backgroundColor:"green"}}>Green</button>
            <button onClick={()=> setColor("blue")} className='outline-none rounded-3xl' style={{backgroundColor:"blue"}}>Blue</button>
            <button onClick={()=> setColor("pink")} className='outline-none rounded-3xl' style={{backgroundColor:"pink"}}>Pink</button>
            <button onClick={()=> setColor("brown")} className='outline-none rounded-3xl' style={{backgroundColor:"brown"}}>Brown</button>
            <button onClick={()=> setColor("black")} className='outline-none rounded-3xl' style={{backgroundColor:"black"}}>Black</button>
          </div>
        </div>
      </div>
  )
}

export default App
