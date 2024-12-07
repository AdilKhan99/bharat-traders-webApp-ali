import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './styling/Navbar.css';
import cartIcon from './images/cart.png';
import loginIcon from './images/login.png';
import logoutIcon from './images/logout.png';
import logoIcon from './images/finalcirclelogo.png';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [customerName, setCustomerName] = useState('');
  let nav = useNavigate()

  // Check login state on component mount
  useEffect(() => {
    const customerName = localStorage.getItem('customerName');
    console.log()
    if (customerName) {
      setIsLoggedIn(true);
      setCustomerName(customerName);
    }
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('customerId');
    localStorage.removeItem('customerName');
    localStorage.removeItem('cartId');
    setIsLoggedIn(false);
    setCustomerName('');
    nav('/');
  };

  return (
    <div className="navbar" id="backToTop">
      <div>
        <Link to="/">
          <img src={logoIcon} alt="Logo" id="logo1" />
        </Link>
      </div>
      <div><Link to="/">Home</Link></div>
      <div><Link to="/About">About</Link></div>
      <div><Link to="/IceCream">Ice Cream raw material</Link></div>
      <div><Link to="/Bakery">Bakery raw material</Link></div>
      <div><Link to="/Sweets">Sweets raw material</Link></div>
      <div><Link to="/Milk">Milk Powder</Link></div>
      <div><Link to="/CartAssigned">
        <img src={cartIcon} alt="Cart" id="cart1" />
      </Link></div>
      <div><Link to="/ContactUs">Contact Us</Link></div>
      <div class="flex flex-col items-center" >
        {isLoggedIn ? (
          <>
            <span>Welcome, {customerName}</span>
            <img
              src={logoutIcon}
              alt="Logout"
              id="logoutIcon"
              onClick={handleLogout}
            />
          </>
        ) : (
          <Link to="/Login">
            <img src={loginIcon} alt="Login" id="loginIcon" />
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
