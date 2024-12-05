import React, { useState } from 'react';
import './styling/CreateAccount.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import a from './images/finallogo.png';
import b from './images/finallogo4.jpeg'
import c from './images/finalcirclelogo.png'

function CreateAccount() {
  let nav = useNavigate();

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phoneNumber: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/customers', customer);
      alert('Customer added successfully!');
      localStorage.setItem('customerId', response.data.body.customerId); // Save ID for verification
      setCustomer({ name: '', email: '', password: '', address: '', phoneNumber: '' }); // Reset form
      nav("/Verification"); // Redirect after successful submission
    } catch (error) {
      console.error('Error adding customer:', error);
      alert('Failed to add customer.');
    }
  };

  return (
    <div className="create-account-container">
      <div className="create-account-box">
        <img src={c} alt="Bharat Traders Logo" className="bharat-logo" />
        <h2 className="create-account-header">Create Account</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="label-text">Your name</label>
          <input type="text" id="name" name="name" className="input-box" placeholder="First and last name" required onChange={handleChange} />

          <label htmlFor="mobile" className="label-text">Mobile number</label>
          <div className="mobile-input-group">
            <select className="country-code"><option value="+91">IN +91</option></select>
            <input type="text" id="mobile" name="phoneNumber" className="mobile-input" placeholder="Mobile number" required onChange={handleChange} />
          </div>

          <label htmlFor="address" className="label-text">Your address</label>
          <input type="text" id="address" name="address" className="input-box" placeholder="Address" required onChange={handleChange} />

          <label htmlFor="email" className="label-text">Your email</label>
          <input type="text" id="email" name="email" className="input-box" placeholder="Email" required onChange={handleChange} />

          <label htmlFor="password" className="label-text">Password</label>
          <input type="password" id="password" name="password" className="input-box" placeholder="At least 6 characters" required onChange={handleChange} />

          <p className="info-text">
            To verify your Email Address, we will send you a text message with a temporary code. Message and data rates may apply.
          </p>

          <button type="submit" className="verify-button">Verify Email Address</button>
        </form>

        <p className="signin-text">
          Already have an account? <a href="/Login" className="link">Sign in</a>
        </p>

        <p className="footer-text">
          By creating an account or logging in, you agree to Bharat Trader's{" "}
          <a href="/TermsAndPrivacy" className="link">Conditions of Use and{" "}Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}

export default CreateAccount;

