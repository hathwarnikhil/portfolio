import React from 'react';
import { NavLink } from 'react-router-dom'; 
import '../styles.css';

const Footer = () => {
  return (
    <footer> 
      <div className="footer-content">
        <nav className="navBar">
          <NavLink 
            exact
            to="/" 
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            About
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
