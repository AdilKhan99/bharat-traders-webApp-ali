import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import '../tailwind.css';
import './styling/Home.css';
import a from './images/Sweets1.jpg';
import b from './images/icecream1.jpg';
import c from './images/Bakery2.jpeg'; 
import Navbar from './Navbar';
import Footer from './Footer';

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
  </div>
);

// Image Slider Component
const ImageSlider = () => {
  const images = [a, b, c];
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [images.length]);
  
  const handleNext = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  const handlePrev = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  
  return (
    <div className="slider-container relative overflow-hidden">
      <div
        className="slider flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="slide min-w-full" key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>

      <button className="nav-button left" onClick={handlePrev}>
        <span className="button-icon">&#8249;</span>
      </button>

      <button className="nav-button right" onClick={handleNext}>
        <span className="button-icon">&#8250;</span>
      </button>
    </div>
  );
};

// Product List Component
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/products');
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        
        const data = await response.json();
        setProducts(data.body);
      } catch (error) {
        console.error('Fetch error:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, []);

  const handleAddToCart = async (productId) => {
    try {
      const cartId = localStorage.getItem("cartId");
      if (!cartId) {
        alert("Please log in to add the product.");
        return;
      }

      const response = await fetch(
        `http://localhost:8080/cart-items/${cartId}/add/${productId}/1`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        const errorDetails = await response.text();
        console.error("Error details:", errorDetails);
        throw new Error(`Failed to add product to cart: ${response.status}`);
      }

      alert("Product added to cart successfully!");
    } catch (error) {
      console.error("Error in handleAddToCart:", error);
      alert(`Error adding product to cart: ${error.message}`);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500 text-center mt-4">Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <div key={product.productId} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            className="w-full h-64 md:h-72 lg:h-80 object-contain"
            src={product.image_url}
            alt={product.name}
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
            <p className="mt-2 text-gray-600">{product.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-lg font-bold text-gray-800">₹{product.price.toFixed(2)}</span>
              <button 
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                id='AddToCart'
                onClick={() => handleAddToCart(product.productId)}
              >
                Add To Cart
              </button>
              <span className="inline-flex items-center px-2 py-1 text-sm font-semibold text-white bg-green-500 rounded-full">
                Available: {product.available}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Back to Top Button Component
const BackToTopButton = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button 
      onClick={scrollToTop} 
      className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
    >
      &#8593;
    </button>
  );
};

// Main Home Component
function Home() {
  useEffect(() => {
    const fetchCartId = async () => {
      try {
        const response = await fetch('http://localhost:8080/get-cart-id', { method: 'GET' });
        if (!response.ok) throw new Error(`Failed to fetch cart ID: ${response.status}`);
        
        const data = await response.json();
        localStorage.setItem('cartId', data.cartId);
      } catch (error) {
        console.error('Error fetching cart ID:', error);
      }
    };

    if (!localStorage.getItem('cartId')) fetchCartId();
  }, []);

  return (
    <div>
      <Navbar />
      <ImageSlider />
      <h1 className="text-center text-3xl font-bold my-6">Welcome to Our Shop</h1>
      <ProductList />
      <BackToTopButton />
      <Footer />
    </div>
  );
}

export default Home;
