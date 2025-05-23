import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")


  return (
    <div className='w-full h-screen duration-200'
      style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '> 
          <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-amber-100 px-2 py-2 rounded-3xl'> 
            <button className=' outline-none px-4 py-2 rounded-2xl' style={{backgroundColor:"red"}} onClick={()=>setColor("red")}> Red </button>
            <button className=' outline-none px-4 py-2 rounded-2xl' style={{backgroundColor:"Blue"}} onClick={()=>setColor("Blue")} > Blue </button>
            <button className=' outline-none px-4 py-2 rounded-2xl' style={{backgroundColor:"green"}} onClick={()=>setColor("green")}  > Green </button>
          </div>

        </div>
    </div>

  );
}

export default App
