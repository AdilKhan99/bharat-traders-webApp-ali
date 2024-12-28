import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styling/Navbar.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import cartIcon from './images/cart.png';
import loginIcon from './images/login.png';
import logoutIcon from './images/logout.png';
import logoIcon from './images/finalcirclelogo.png';
import Logout from './Logout';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = useNavigate();

  // Check login state on component mount
  useEffect(() => {
    const customerName = localStorage.getItem('customerName');
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
    <div className="navbar" id='backToTop'>
      <div>
        <Link to="/">
          <img src={logoIcon} alt="Logo" id="logo1" /> 
        </Link>
      </div>
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} >
        <i className={`bi ${menuOpen ? 'bi-x' : 'bi-list'}`} id='menu' ></i>
      </div>
      <div className={`menu-items ${menuOpen ? 'open' : ''}`}>
        <div className='navbar-item'><Link to="/">Home</Link></div>
        <div className='navbar-item'><Link to="/About">About</Link></div>
        <div className='navbar-item'><Link to="/IceCream">Ice Cream raw material</Link></div>
        <div className='navbar-item'><Link to="/Bakery">Bakery raw material</Link></div>
        <div className='navbar-item'><Link to="/Sweets">Sweets raw material</Link></div>
        <div className='navbar-item'><Link to="/Milk">Milk Powder</Link></div>
        <div>
          <Link to={isLoggedIn ? "/CartAssigned" : "/Cart"}>
            <img src={cartIcon} alt="Cart" id="cart1" />
          </Link>
        </div>
        <div className='navbar-item'><Link to="/ContactUs">Contact Us</Link></div>
        <div className="flex flex-col items-center">
          {isLoggedIn ? (
            <>
              <span id="nameofcustomer">{customerName}</span>
              <img src={logoutIcon} alt="Logout" id="logoutIcon" onClick={handleLogout} />
            </>
          ) : (
            <Link to="/Login">
              <img src={loginIcon} alt="Login" id="loginIcon" />
            </Link>
          )}
        </div>
      </div>
      {isLoggedIn && <Logout setIsLoggedIn={setIsLoggedIn} setCustomerName={setCustomerName} />}
    </div>
  );
}

export default Navbar;




