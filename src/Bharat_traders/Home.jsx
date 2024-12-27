import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import ProductList from './ProductList';
import '../tailwind.css';
import './styling/Home.css';
import a from './images/Sweets1.jpg';
import b from './images/icecream1.jpg';
import c from './images/Bakery2.jpeg'; 
import Navbar from './Navbar';
import Footer from './Footer';



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



// Back to Top Button Component
const BackToTopButton = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button 
      onClick={scrollToTop} 
      className="fixed bottom-5 right-5 bg-[#047664] text-white p-3 rounded-full shadow-lg hover:bg-orange-500 transition"
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
        const response = await fetch('http://3.110.40.4:8080/get-cart-id', { method: 'GET' });
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
      
      <ProductList apiUrl="http://3.110.40.4:8080/products" /> 
      <BackToTopButton />
      <Footer />
    </div>
  );
}

export default Home;
