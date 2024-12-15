import React from 'react'
import './styling/Cart.css'
import a from './images/cart2.jpg'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';

function Cart() {

 let nav = useNavigate()
    
     function createAccount()
     {
       nav("/CreateAccount")
     }


    function login()
    {
       nav("/Login")
    }

    



  return (
    <div>
      <Navbar/>
      {/* <h1>this is the cart page</h1> */}
      <div className='part1'>

      <div className='part1a'> 
       <div className='part1b'>
        <img src={a} alt="" id='cartimg'/>
       </div>
       <div className='part1c'> 
        <h1 id='title1'>Your Bharat Traders Cart is empty</h1>
        <p>Shop today’s deals</p>
        <br />
        <button id='button1' onClick={login}>Sign in to your account</button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button id='button2' onClick={createAccount}>Sign up now</button>
       </div>
       </div>

      <div className='part1e'></div>


      </div>
      <Footer/>
    </div>
  )
}

export default Cart
