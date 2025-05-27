import { useState } from 'react'
import './App.css'
import Header from './header/Header'
import Home from './home/Home'
import Footer from './footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
