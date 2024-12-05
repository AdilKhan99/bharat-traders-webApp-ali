import React from 'react'
import './styling/Bakery.css'
import a from './images/Bakery1.mp4'
import b from './images/Bakery3.mp4'
import Navbar from './Navbar';
import Footer from './Footer';


function Bakery() {
  return (
    <div>
      <Navbar/>
      <h1>this is the bakery page</h1>
      <div className='part1'>
        <video src={a} id='bakery1' autoPlay loop ></video>
      </div>
      <Footer/> 
    </div>
  )
}

export default Bakery




