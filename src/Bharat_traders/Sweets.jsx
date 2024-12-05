import React from 'react'
import './styling/Sweets.css'
import a from './images/Sweets1.jpg'
import Navbar from './Navbar';
import Footer from './Footer';


function Sweets() {
  return (
    <div>
      <Navbar/>
      <h1>this is the sweets page</h1>
      <div className='part1'>
        <img src={a} alt="" id='s1'/>

      </div>


      <Footer/>
    </div>
  )
}

export default Sweets
