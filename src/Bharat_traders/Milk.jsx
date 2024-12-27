import React from 'react'
import './styling/Milk.css'
import Navbar from './Navbar';
import Footer from './Footer';
import k from './images/Milk11.jpg'
import l from './images/Milk17.jpg'
import ProductList from './ProductList';




function Milk() {
  return (
    <div>
      <Navbar/>
      {/* <h1>this is the Milk powder page</h1> */}
      <div className='part1'>
        <img src={l} alt="" id='img1'/>
      </div>
      <div className='part2'>
        <img src={k} alt="" id='redtag'/>
      </div>
    
      <div>
        <h1 id='heading'>Skimmed Milk Powder</h1>
        <ProductList apiUrl="http://3.110.40.4:8080/products/category/4" />
      </div>





      <Footer/>
    </div>
  )
}

export default Milk
