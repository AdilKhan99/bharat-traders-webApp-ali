import React from 'react'
import a from './images/icecream1.jpg'
import './styling/IceCream.css'
import Navbar from './Navbar';
import Footer from './Footer';
import ProductList from './ProductList';
import { useEffect, useState } from 'react';
import '../tailwind.css';


function IceCream() {
  return (
    <div>
      <Navbar/>
      {/* <h1>this is the IceCream page</h1> */}

      <div className='part1'>
        <img src={a} alt="" id='ice1'/>
      </div>
      <ProductList apiUrl="http://localhost:8080/products/category/1" /> 
      <Footer/>
    </div>
  )
}

export default IceCream







