import React from 'react'
import "./App.css"
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home"
import About from "./Pages/About"

export default function App() {
  return (
   <>
   <BrowserRouter>
   <div style={{padding:'20px'}}>
    <h1>Welcome to my MPA Route</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
   </div>
   </BrowserRouter>
   </>
  )
}
