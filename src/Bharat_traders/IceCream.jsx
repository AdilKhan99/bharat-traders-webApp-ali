import React from 'react'
import a from './images/icecream1.jpg'
import './styling/IceCream.css'
import Navbar from './Navbar';
import Footer from './Footer';

import { useEffect, useState } from 'react';
import '../tailwind.css';

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
  </div>
);

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/products/category/1');
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
        className="w-full h-48 object-contain"
        src={product.image_url}
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







function IceCream() {
  return (
    <div>
      <Navbar/>
      {/* <h1>this is the IceCream page</h1> */}

      <div className='part1'>
        <img src={a} alt="" id='ice1'/>
      </div>
      <ProductList />
      <Footer/>
    </div>
  )
}

export default IceCream







