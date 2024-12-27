import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import c from './images/finalcirclelogo.png';
import "./styling/ForgotPassword.css"

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage('New password and confirm password do not match.');
      return;
    }

    try {
      const response = await fetch(
        `http://3.110.40.4:8080/customers/reset-password?email=${encodeURIComponent(email)}&newPassword=${encodeURIComponent(newPassword)}`, 
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        setMessage('Password reset successful. Redirecting to login...');
        setTimeout(() => navigate('/Login'), 2000); // Redirect after 3 seconds
      } else {
        const errorText = await response.text();
        setMessage(`Error: ${errorText}`);
      }
    } catch (error) {
      console.error('Reset password error:', error);
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-box">
        <img src={c} alt="Bharat Traders Logo" className="bharat-logo" />
        <h2 className="forgot-password-header">Reset Password</h2>
        <p className="instructions-text">Enter your email address and your new password below.</p>
        <form onSubmit={handleResetPassword}>
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

          <label htmlFor="newPassword" className="label-text">New Password</label>
          <input
            type="password"
            id="newPassword"
            className="input-box"
            placeholder="Enter your new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />

          <label htmlFor="confirmPassword" className="label-text">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            className="input-box"
            placeholder="Confirm your new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit" className="submit-button">Reset Password</button>
        </form>
        {message && <p className="response-message">{message}</p>}
      </div>
    </div>
  );
}

export default ForgotPassword;

