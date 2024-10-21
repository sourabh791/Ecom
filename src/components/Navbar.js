import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../assets/logo.png'
function Navbar() {
  return (
    <nav>
      <img src={logo} alt="" />
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact Us</Link>
      <Link to="/subscribe">Subscribe</Link>
      <Link to="/delivery-information">Delivery Information</Link>
      <Link to="/payment-information">Payment Information</Link>
    </nav>
  );
}

export default Navbar;
