import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePayment = () => {
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }
    alert(`Payment successful with ${paymentMethod}!`);
  };

  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">Choose a Payment Method:</h2>
        <div className="flex flex-col">
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="Credit/Debit Card"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Credit/Debit Card
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="UPI"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            UPI
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="Cash on Delivery"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Cash on Delivery
          </label>
        </div>
      </div>
      <button
        onClick={handlePayment}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Confirm Payment
      </button>
      <Footer />
    </div>
  );
};

export default Checkout;
