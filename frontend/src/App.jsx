import { useState } from 'react'
// import './App.css'
import HomePage from './landingPage/home/HomePage'
import NavBar from './landingPage/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './landingPage/Footer'

function App() {

  return (
    <>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
