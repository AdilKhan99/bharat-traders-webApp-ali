import React, { useEffect, useState } from 'react';
import "./styling/ProductList.css"


// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
  </div>
);
// Product List Component
const ProductList = ({ apiUrl }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch(apiUrl);
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
                
                <span className="inline-flex items-center px-2 py-1 text-sm font-semibold text-white bg-green-500 available-badge">
                  Available: {product.available}
                </span>
              </div>
              <br />
              <div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                  id='AddToCart'
                  onClick={() => handleAddToCart(product.productId)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  export default ProductList;