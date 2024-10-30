import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import IceCream from './IceCream'
import Bakery from './Bakery'
import Sweets from './Sweets'
import Milk from './Milk'

function Path() {
  return (
    <div>
      <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route element={<Home/>} path="/"></Route>
        <Route element={<About/>} path="/About"></Route>
        <Route element={<IceCream/>} path="/IceCream"></Route>
        <Route element={<Bakery/>} path="/Bakery"></Route>
        <Route element={<Sweets/>} path="/Sweets"></Route>
        <Route element={<Milk/>} path="/Milk"></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Path
