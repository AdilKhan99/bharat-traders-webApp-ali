import React, { useState } from 'react';
import './styling/Login.css';
import { useNavigate } from 'react-router-dom';
import c from './images/finalcirclelogo.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://3.110.40.4:8080/customers/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // console.log(data.body.cartId);
        const cartId = data.body.cartId;
        const customerName = data.body.customerName;

        if (cartId) {
          localStorage.setItem('cartId', cartId);
          localStorage.setItem('customerName', customerName);
                alert('Login successful!');
        navigate('/');
        } else {
          alert('Login failed: Cart ID not found.');
        }
      } else {
        const errorText = await response.text();
        alert(`Login failed: ${errorText}`);
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login. Please try again.');
    }
  };


  const createAccount = () => navigate('/CreateAccount');

  return (
    <div className="login-container">
        <div className="login-box">
          <img src={c} alt="Bharat Traders Logo" className="bharat-logo" />
        <h2 className="sign-in-header">Sign in</h2>
          <form onSubmit={handleLogin}>
<label htmlFor="email" className="label-text">Email</label>
            <input
              type="email"
            id="email"
              className="input-box"
            placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
<label htmlFor="password" className="label-text">Password</label>
            <input
              type="password"
              id="password"
              className="input-box"
            placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <a href="/ForgotPassword" className="link">Forgot password?</a>
            <button type="submit" className="continue-button">Continue</button>
          </form>
          <p className="help-text">
          By continuing, you agree to Bharat Trader's{' '}
          <a href="/TermsAndPrivacy" className="link">Conditions of Use and Privacy Notice</a>.
        </p>
        <a href="#help" className="help-link">Need help? Contact 9955676868</a>
        <hr className="divider" />
        <p className="new-account-text">New to Bharat Traders?</p>
        <button className="create-account-button" onClick={createAccount}>Create your Bharat Traders account</button>
      </div>
    </div>
  );
}

export default Login;
