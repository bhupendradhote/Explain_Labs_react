import React, { useState } from 'react';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
// Adjusting path to point to your existing CSS file

import '../../assets/styles/HeaderFooter.css';


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Banner */}
      <div className="top-banner">
        <span className="banner-text">Black Friday - Starter Plan for $1</span>
        <button className="banner-btn">Redeem</button>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo-group">
          <a href="/home">
          <div className="logo">
            <div className="logo-box">L</div>
            Explain Labs
          </div>
          </a>
        </div>

        <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="/home">Home <FaChevronDown size={10} /></a>
          <a href="#">Creative Platform <FaChevronDown size={10} /></a>
          <a href="#">Agents Platform <FaChevronDown size={10} /></a>
          <a href="#">Developers <FaChevronDown size={10} /></a>
          <a href="#">Resources <FaChevronDown size={10} /></a>
          <a href="#">Enterprise</a>
          <a href="/pricing">Pricing</a>
        </div>

        <div className="nav-auth">
          <button className="btn-login"><a href="/">Log in</a></button>
          <button className="btn-signup"><a href="/">Sign up</a></button>
        </div>

        <button className="mobile-menu-icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </nav>
    </>
  );
};

export default Header;