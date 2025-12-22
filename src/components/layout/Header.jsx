import React, { useState } from 'react';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
// Adjusting path to point to your existing CSS file

import '../../assets/styles/HeaderFooter.css';
import logoImage from '../../assets/images/logo.jpg';


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Banner */}
      <div className="top-banner">
        <span className="banner-text"><span>Black Friday -</span> Starter Plan for $1</span>
        <button className="banner-btn">Redeem</button>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo-group">
          <a href="/home">
          <div className="logo">
  <img src={logoImage} alt="Explain Labs" className="logo-img" />
</div>

          </a>
        </div>

        <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>

  <div className="nav-item">
    <a href="/home">Home <FaChevronDown size={10} /></a>
    <div className="dropdown-menu">
      <a href="/overview">Overview</a>
      <a href="/features">Features</a>
    </div>
  </div>

  <div className="nav-item">
    <a href="#">Creative Platform <FaChevronDown size={10} /></a>
    <div className="dropdown-menu">
      <a href="#">AI Design</a>
      <a href="#">Content Studio</a>
      <a href="#">Templates</a>
    </div>
  </div>

  <div className="nav-item">
    <a href="#">Agents Platform <FaChevronDown size={10} /></a>
    <div className="dropdown-menu">
      <a href="#">AI Agents</a>
      <a href="#">Automation</a>
    </div>
  </div>

  <div className="nav-item">
    <a href="#">Developers <FaChevronDown size={10} /></a>
    <div className="dropdown-menu">
      <a href="#">API Docs</a>
      <a href="#">SDKs</a>
    </div>
  </div>

  <div className="nav-item">
    <a href="#">Resources <FaChevronDown size={10} /></a>
    <div className="dropdown-menu">
      <a href="#">Blog</a>
      <a href="#">Guides</a>
      <a href="#">Support</a>
    </div>
  </div>

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