import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setIsLoggedIn, setCustomerName }) => {
  const nav = useNavigate();

  // Handle logout function
  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem('customerId');
    localStorage.removeItem('customerName');
    localStorage.removeItem('cartId');

    // Clear sessionStorage
    sessionStorage.removeItem('logoutTime');

    // Update login state
    setIsLoggedIn(false);
    setCustomerName('');
    alert('You have been automatically logged out due to inactivity. Please log in again to continue.');

    // Navigate to home page
    nav('/');
  };

  // Set auto logout time (20 minutes from login)
  const setAutoLogout = () => {
    const logoutTime = new Date().getTime() + 20 * 60 * 1000; // 20 minutes from now
    sessionStorage.setItem('logoutTime', logoutTime); // Store logout time in session storage
  };

  // Check if logout time has passed
  const checkAutoLogout = () => {
    const currentTime = new Date().getTime();
    const logoutTime = sessionStorage.getItem('logoutTime');

    if (logoutTime && currentTime >= logoutTime) {
      handleLogout(); // Logout the user
    }
  };

  useEffect(() => {
    // Set logout time when the component is mounted
    setAutoLogout();

    // Check auto-logout periodically
    const intervalId = setInterval(() => {
      checkAutoLogout();
    }, 1000); // Check every second for better precision

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return null; // No UI needed for this component
};

export default Logout;

