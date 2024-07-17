import React from 'react';
import '../styles/prep.css';
import Footer from './footer.js';
import Header from './header.js';
function Header() {
  return (
    <header>
      <img
        src={require('../assets/HOPE BRIDGE LOGO.png')}
        className="main"
        alt="Hope Bridge Logo"
      />
      <div className="navigation">
        <div className="navigation-items">
          <a href="aboutUs.html">About us</a>
          <a href="volunteerpage2.html">Volunteer</a>
          <a href="prep.html">Preparedness</a>
          <a href="donate.html">Donate</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
