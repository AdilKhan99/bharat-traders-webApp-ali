import React from 'react'
import './styling/Bakery.css'
import a from './images/Bakery1.mp4'
import Navbar from './Navbar';
import Footer from './Footer';
import ProductList from './ProductList';





function Bakery() {
  return (
    <div>
      <Navbar/>
      {/* <h1>this is the bakery page</h1> */}
      <div className='part1'>
        <video src={a} id='bakery1' autoPlay loop ></video>
      </div>
      <ProductList apiUrl="http://3.110.40.4:8080/products/category/2" /> 
      <Footer/> 
    </div>
  )
}

export default Bakery




