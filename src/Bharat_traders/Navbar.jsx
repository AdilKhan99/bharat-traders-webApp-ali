import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './styling/Navbar.css'

function Navbar() {
  return (
    <>
    <div className='navbar'>
      <div><Link to={"/"}>Home</Link></div>  
      <div><Link to={"/About"}>About</Link></div>
      <div><Link to={"/IceCream"}>Ice Cream row material</Link></div>
      <div><Link to={"/Bakery"}>Bakery row material</Link></div>
      <div><Link to={"/Sweets"}>Sweets row material</Link></div>
      <div><Link to={"/Milk"}>Milk Powder</Link></div>
      <div>Contact Us</div>
      
    </div>
    </>
  )
}

export default Navbar

