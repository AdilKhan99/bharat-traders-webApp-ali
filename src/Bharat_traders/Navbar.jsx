import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './styling/Navbar.css'
import a from './images/cart.png'
import b from './images/logo5.jpeg'
import c from './images/login.png'
import d from './images/finallogo.png'
import e from './images/logout.png'
import f from './images/finallogo4.jpeg'
import g from './images/finalcirclelogo.png'

function Navbar() {

  const [toggle, setToggle] = useState(false)

  function handleToggle(){
    setToggle(!toggle)
  }

  return (
    <>
    <div className='navbar' id='backTotop'>
    <div><Link to={"/"}> <img src={g} alt="" id='logo1'/> </Link></div> 
      <div><Link to={"/"}>Home</Link></div>  
      <div><Link to={"/About"}>About</Link></div>
      <div><Link to={"/IceCream"}>Ice Cream raw material</Link></div>
      <div><Link to={"/Bakery"}>Bakery raw material</Link></div>
      <div><Link to={"/Sweets"}>Sweets raw material</Link></div>
      <div><Link to={"/Milk"}>Milk Powder</Link></div>
      <div><Link to={"/CartAssigned"}> <img src={a} alt="" id='cart1' /> </Link></div>
      <div><Link to={"/ContactUs"}>Contact Us</Link></div>
      <div onClick={handleToggle}>{toggle ? <Link to={"/"}> <img src={e} alt="" id='logouticon' /> </Link>:<Link to={"/Login"}> <img src={c} alt="" id='loginicon' /> </Link>}</div>
    </div>
    </>
  )
}

export default Navbar





