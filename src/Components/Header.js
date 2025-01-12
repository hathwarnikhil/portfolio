import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
import '../styles.css';
import TypewriterText from './TypewriterText';


const Header = () => {
  return (
    <header>
      <div className="header-content">
        <div className="logo-container">
        <motion.svg
          className="logo"
          viewBox="-5 -0.1 69 15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 1
            }}
            stroke="#ffffff"  
            strokeWidth={1}  
            strokeDasharray="0 1"
            fill="none"
            d="M0 0 C2.3125 -0.3125 2.3125 -0.3125 5 0 C6.6875 2.25 6.6875 2.25 8 5 C8.66 6.32 9.32 7.64 10 9 C10.33 6.03 10.66 3.06 11 0 C11.99 0 12.98 0 14 0 C14 4.62 14 9.24 14 14 C12.68 14.33 11.36 14.66 10 15 C6.03157122 12.11386998 4.70650667 8.43691734 3 4 C2.67 7.3 2.34 10.6 2 14 C1.01 14 0.02 14 -1 14 C-1.02694851 12.04174127 -1.04637218 10.08337774 -1.0625 8.125 C-1.07410156 7.03445312 -1.08570312 5.94390625 -1.09765625 4.8203125 C-1 2 -1 2 0 0 Z "
          />
        </motion.svg>
        </div>
        <nav className="navBar">
          <NavLink
            exact
            to="/"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            <TypewriterText text="Home" />
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            <TypewriterText text="About" />
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            <TypewriterText text="Gallery" />
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            <TypewriterText text="Shop" />
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            <TypewriterText text="Contact" />
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
