import React from 'react'
import './styling/Milk.css'
import Navbar from './Navbar';
import Footer from './Footer';
import k from './images/Milk11.jpg'
import l from './images/Milk17.jpg'


import { useEffect, useState } from 'react';
import '../tailwind.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/products/category/4');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data.body);
        console.log("test",products);
      } catch (error) {
        console.error('Fetch error:', error); // Log error details
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
  {products.map((product) => (
    <div key={product.productId} className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={product.productImage}
        alt={product.name}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
        <p className="mt-2 text-gray-600">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-800">Price: ₹{product.price.toFixed(2)}</span>
          <span className="inline-flex items-center px-2 py-1 text-sm font-semibold text-white bg-green-500 rounded-full">
            Available: {product.productAvailability}
          </span>
        </div>
      </div>
    </div>
  ))}
</div>

  );
};

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
      <ProductList />
      </div>





      <Footer/>
    </div>
  )
}

export default Milk
