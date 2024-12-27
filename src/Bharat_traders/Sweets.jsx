import React from 'react'
import './styling/Sweets.css'
import a from './images/Sweets1.jpg'
import Navbar from './Navbar';
import Footer from './Footer';
import ProductList from './ProductList';



function Sweets() {
  return (
    <div>
      <Navbar/>
      {/* <h1>this is the sweets page</h1> */}
      <div className='part1'>
        <img src={a} alt="" id='s1'/>

      </div>

      <ProductList apiUrl="http://3.110.40.4:8080/products/category/3" /> 
      <Footer/>
    </div>
  )
}

export default Sweets
