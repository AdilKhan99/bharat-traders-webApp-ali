import React, { useEffect, useState } from "react";
import './styling/CartAssigned.css'
import Navbar from "./Navbar";
import Footer from "./Footer";
import a from "./images/emptyCart.png"

import { useNavigate } from "react-router-dom";

const CartAssigned = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  console.log("hi assignee");
  useEffect(() => {
    const fetchCartItems = async () => {
      const cartId = localStorage.getItem("cartId");
      try {
        const response = await fetch(`http://3.110.40.4:8080/cart-items/${cartId}/items`);
        if (!response.ok) {
          throw new Error(`Failed to fetch cart items: ${response.status}`);
        }
        const data = await response.json();
        setCartItems(data.body);
        calculateTotal(data.body);
      } catch (error) {
        console.error("Failed to fetch cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  const calculateTotal = (items) => {
    const totalPrice = items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
    setTotal(totalPrice);
  };

  const handleCheckout = () => {
    navigate("/checkout", { state: { totalAmount: total } });
  };

  const handleUpdateQuantity = async (cartItemId, quantity) => {
    try {
      if (quantity <= 0) {
        // Delete the item from the backend
        const deleteResponse = await fetch(`http://3.110.40.4:8080/cart-items/${cartItemId}`, {
          method: "DELETE",
        });
  
        if (!deleteResponse.ok) {
          throw new Error(`Failed to delete cart item: ${deleteResponse.status}`);
        }
  
        // Remove the item from the frontend state
        setCartItems((prevItems) => prevItems.filter((item) => item.cartItemId !== cartItemId));
        calculateTotal(cartItems);
        return;
      }
  
      // Update the quantity of the item
      const response = await fetch(`http://3.110.40.4:8080/cart-items/${cartItemId}/quantity/${quantity}`, {
        method: "PUT",
      });
  
      if (!response.ok) {
        throw new Error(`Failed to update quantity: ${response.status}`);
      }
  
      const updatedCartItem = await response.json();
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.cartItemId === cartItemId
            ? { ...item, quantity: updatedCartItem.body.quantity }
            : item
        )
      );
      calculateTotal(cartItems);
    } catch (error) {
      console.error("Error updating cart item:", error);
    }
  };
  

  
  return (
    <>
    <div>
      <Navbar />
    
         {cartItems.length === 0 ? (<div className="empty-cart p-8">
         <img src={a} alt="Empty Cart" className="empty-cart-image mx-auto w-128 h-128" id="emptycart"/>
        
       </div>):(
        <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <caption className="text-lg font-bold mb-2">Your Selected Products</caption>
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Image</th>
              <th className="border border-gray-300 px-4 py-2">Product Name</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
              <th className="border border-gray-300 px-4 py-2">Quantity</th>
              <th className="border border-gray-300 px-4 py-2">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.cartItemId}>
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={item.product.image_url}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">{item.product.name}</td>
                <td className="border border-gray-300 px-4 py-2">₹{item.product.price.toFixed(2)}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex items-center">
                    <button
                      className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                      onClick={() => handleUpdateQuantity(item.cartItemId, item.quantity + 1)}
                    >
                      +
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                      onClick={() => handleUpdateQuantity(item.cartItemId, item.quantity - 1)}
                    >
                      -
                    </button>
                  </div>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  ₹{(item.product.price * item.quantity).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-right mt-4">
          <h2 className="text-xl font-bold text-right">Total: ₹{total.toFixed(2)}</h2>
          <button
            onClick={handleCheckout}
            className="bg-green-500 text-white px-4 py-2 rounded mt-4 text-center">
            Proceed to Checkout
          </button>
        </div>
        </div>
       )
       
      }
      
      
      <Footer />
    </div>
    </>
  );
};



export default CartAssigned;


