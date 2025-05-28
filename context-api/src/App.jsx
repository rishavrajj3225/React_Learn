import { useState } from 'react'
import userContextProvider from './context/userContextProvider'
import './App.css'
import Login from '../components/login'
import Profile from '../components/profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <userContextProvider>
      <h1>Hii this is react context api</h1>
      <Login/>
      <Profile/>
    </userContextProvider>
  );
}

export default App
