// import React from 'react'
// import './styling/Verification.css'
// import a from './images/logo5.jpeg'
// import b from './images/finallogo4.jpeg'

// function Verification() {  
//   return (
//     <>
//       <div className="verification-container">
//     <div className="verification-box"> 
//       <img
//         src={b} alt="Amazon Logo" className="amazon-logo"
//       />
//       <h2 className="verification-header">Two-Step Verification</h2>
//       <p className="verification-instructions">
//         Enter the code that has been sent to a Email Address
//       </p>
//       <form>
//         <label htmlFor="code" className="label-text">Enter code:</label>
//         <input type="text" id="code" className="input-box" placeholder="Enter your code"/>
//         <div className="checkbox-group">
//           <input type="checkbox" id="device-check" />
//           <label htmlFor="device-check" className="checkbox-label">
//             Don't ask for codes on this device
//           </label>
//         </div>
//         <button type="submit" className="sign-in-button">Sign in</button>
//       </form>
//       <a href="#resend" className="resend-link">Didn't receive the code?</a>
//     </div>
//   </div>
//     </>
//   )
// }

// export default Verification



// import React, { useState } from 'react';
// import axios from 'axios';

// function Verification() {
//     const [otp, setOtp] = useState('');
//     const [message, setMessage] = useState('');
//     const customerId = localStorage.getItem('customerId');

//     const handleVerification = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post(`http://localhost:8080/customers/${customerId}/verify`, null, {
//                 params: { otp: otp },
//             });
//             if (response.data.body) {
//                 alert('Email verified successfully!');
//                 setMessage('Verification successful!');
//             } else {
//                 setMessage('Verification failed. Please check your OTP.');
//             }
//         } catch (error) {
//             console.error('Verification error:', error);
//             setMessage('Verification failed. Please try again.');
//         }
//     };

//     return (
//         <div className="verification-container">
//             <form onSubmit={handleVerification}>
//                 <label htmlFor="otp">Enter OTP:</label>
//                 <input
//                     type="text"
//                     id="otp"
//                     value={otp}
//                     onChange={(e) => setOtp(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Verify</button>
//             </form>
//             {message && <p>{message}</p>}
//         </div>
//     );
// }

// export default Verification;


import React, { useState } from 'react';
import axios from 'axios';
import './styling/Verification.css';
import b from './images/finallogo4.jpeg';
import c from './images/finalcirclelogo.png'
import { useNavigate } from 'react-router-dom';

function Verification() {
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const customerId = localStorage.getItem('customerId');
  console.log("customerID",customerId);
  let nav = useNavigate();

  const handleVerification = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      const response = await axios.post(`http://localhost:8080/customers/${customerId}/verify`, null, {
        params: { otp: otp },
      });
      if (response.data.body) {
        setMessage('Email verified successfully!');
        alert('Email verified successfully!');
        console.log("customerID",customerId);
        nav('/')
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


