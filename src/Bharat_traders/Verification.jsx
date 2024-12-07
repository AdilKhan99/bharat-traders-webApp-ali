import React, { useState } from 'react';
import axios from 'axios';
import './styling/Verification.css';
import c from './images/finalcirclelogo.png';
import { useNavigate } from 'react-router-dom';

function Verification() {
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const customerId = localStorage.getItem('customerId');
  const nav = useNavigate();

  const handleVerification = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      // Verifying the OTP
      const response = await axios.post(`http://localhost:8080/customers/${customerId}/verify`, null, {
        params: { otp: otp },
      });

      if (response.data.body) {
        setMessage('Email verified successfully!');
        alert('Email verified successfully!');

        // Fetch customer details after successful verification
        const customerResponse = await axios.get(`http://localhost:8080/customers/${customerId}`);
        const customerData = customerResponse.data.body;

        // Save customer details in localStorage
        localStorage.setItem('customerName', customerData.name); // Save name for Navbar
        localStorage.setItem('customerEmail', customerData.email); // Optional, if needed elsewhere

        // Redirect to the home page
        nav('/');
      } else {
        setError('Verification failed. Please check your OTP.');
      }
    } catch (error) {
      console.error('Verification error:', error);
      setError('Verification failed. Please try again.');
    }
  };

  return (
    <div className="verification-container">
      <div className="verification-box">
        <img src={c} alt="Logo" className="verification-logo" />
        <h2 className="verification-header">Two-Step Verification</h2>
        <p className="verification-instructions">
          Enter the code that has been sent to your registered email address.
        </p>
        <form onSubmit={handleVerification}>
          <label htmlFor="otp" className="label-text">Enter OTP:</label>
          <input
            type="text"
            id="otp"
            className="input-box"
            placeholder="Enter your code"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button type="submit" className="sign-in-button">Verify</button>
        </form>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
        <a href="#resend" className="resend-link">Didn't receive the code?</a>
      </div>
    </div>
  );
}

export default Verification;
