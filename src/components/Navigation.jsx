// src/components/Navbar.jsx
import React from 'react';
import '../styles/styles1.css';

const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><img id="logo" src={require("../styles/images/HOPE BRIDGE LOGO.png")} alt="Logo" /></li>
        <li><a href="index.html">Home</a></li>
        <li><a href="volunteerpage.html">Volunteer</a></li>
        <li><a href="prep.html">Preparedness</a></li>
        <li><a href="donate.html">Donate</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
