import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import QR from "./images/qr.png"; // Import the QR image
import QR2 from "./images/adilphonepay.jpeg"

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isRazorpaySelected, setIsRazorpaySelected] = useState(false);

  const location = useLocation();
  const initialAmount = Number(location.state?.totalAmount) || 0;

  const GST_RATE = 0.18; // 18% GST
  const [gstAmount, setGstAmount] = useState(0);
  const [totalAmountWithGst, setTotalAmountWithGst] = useState(initialAmount);
  const [totalAmount, setTotalAmount] = useState(initialAmount); // State for the total amount (including charges if Razorpay is selected)

  // Calculate GST and total amount with GST
  useEffect(() => {
    const calculatedGstAmount = initialAmount * GST_RATE;
    const calculatedTotalWithGst = initialAmount + calculatedGstAmount;
    setGstAmount(calculatedGstAmount);
    setTotalAmountWithGst(calculatedTotalWithGst);
  }, [initialAmount]);

  // Effect to update total amount if Razorpay is selected
  useEffect(() => {
    if (isRazorpaySelected) {
      const updatedTotal = initialAmount + initialAmount * 0.03; // Add 3% charge
      setTotalAmount(updatedTotal);
    } else {
      setTotalAmount(initialAmount); // Reset total amount to original if Razorpay is deselected
    }
  }, [isRazorpaySelected, initialAmount]);

  const handlePayment = () => {
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }
    alert(`Payment successful with ${paymentMethod}!`);
  };

  const handleRazorpayPayment = () => {
    window.location.href = "https://razorpay.me/@bharattraders7279";
  };

  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="flex">

        {/* Order Summary */}
        <div className="w-1/4 p-4 bg-gray-100">
          <h2 className="text-lg font-bold mb-4 ">Order Summary</h2>
          
          {/* Total Amount */}
          <p className="mb-2"><strong>Base Amount:</strong> ₹{initialAmount.toFixed(2)}</p>
          <p className="mb-2"><strong>GST (18%):</strong> ₹{gstAmount.toFixed(2)}</p>
          <h3 className="text-xl font-bold text-green-500">
            <strong>Total (With GST):</strong> ₹{totalAmountWithGst.toFixed(2)}
          </h3>

          {totalAmountWithGst < 9999 ? (
            // Show QR Code for payments less than 99999
            <>
              <h3 className="text-md font-bold mb-2">Scan to Pay</h3>
              <img 
                src={QR2} 
                alt="QR Code for Payment" 
                className="w-40 h-40 mx-auto object-contain border-2 border-gray-300 rounded-lg"
              />
            </>
          ) : (
            // Show Account Details and Razorpay option for payments >= 99999
            <>
              <h3 className="text-md font-bold mb-2">Payment Options</h3>
              
              {/* Static Account Details */}
              <div className="mb-4">
                <h4 className="text-lg font-bold mb-2">Bank Transfer Details</h4>
                <p className="mb-2"><strong>Account Name:</strong> ADIL KHAN</p>
                <p className="mb-2"><strong>Account Number:</strong> 678</p>
                <p className="mb-2"><strong>IFSC Code:</strong> 5678</p>
              </div>

              {/* Razorpay Option */}
              <div className="mt-4">
                <label className="block mb-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Razorpay"
                    onChange={(e) => {
                      setPaymentMethod(e.target.value);
                      setIsRazorpaySelected(true);
                    }}
                  />
                  Pay via Razorpay (3% Transaction Charge will be added)
                </label>
                {isRazorpaySelected && (
                  <p className="text-sm text-red-500">
                    A 3% transaction charge is added. New Total: ₹{totalAmount.toFixed(2)}
                    {/* Razorpay Payment Button */}
          <button
            onClick={handleRazorpayPayment}
            className="bg-green-500 text-white px-4 py-2 rounded mt-4 w-full">
            Pay via Razorpay
          </button>

                  </p>
                )}
              </div>
            </>
          )}

          {/* Confirm Payment Button */}
          <button
            onClick={handlePayment}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
            Confirm Payment
          </button>

          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
