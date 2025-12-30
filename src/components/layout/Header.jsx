import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import '../../assets/styles/HeaderFooter.css';
import logoImage from '../../assets/images/logo.jpg';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleDropdownClick = (menu) => {
    if (isMobile) {
      // Toggle dropdown only on mobile
      setActiveDropdown(activeDropdown === menu ? null : menu);
    }
  };

  // Close mobile menu when clicking outside (optional)
  const handleLinkClick = () => {
    if (isMobile) {
      setMobileMenuOpen(false);
      setActiveDropdown(null);
    }
  };

  return (
    <>
      {/* Top Banner */}
      {/* <div className="top-banner">
        <span className="banner-text"><span>Black Friday -</span> Starter Plan for $1</span>
        <button className="banner-btn">Redeem</button>
      </div> */}

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
            <a 
              href="/home" 
              onClick={(e) => {
                if (isMobile) {
                  e.preventDefault();
                  handleDropdownClick('home');
                }
              }}
            >
              Home <FaChevronDown size={10} className={`dropdown-icon ${activeDropdown === 'home' ? 'rotate' : ''}`} />
            </a>
            <div className={`dropdown-menu ${activeDropdown === 'home' ? 'show' : ''}`}>
              <a href="/overview" onClick={handleLinkClick}>Overview</a>
              <a href="/features" onClick={handleLinkClick}>Features</a>
            </div>
          </div>

          <div className="nav-item">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                handleDropdownClick('creative');
              }}
            >
              Creative Platform <FaChevronDown size={10} className={`dropdown-icon ${activeDropdown === 'creative' ? 'rotate' : ''}`} />
            </a>
            <div className={`dropdown-menu ${activeDropdown === 'creative' ? 'show' : ''}`}>
              <a href="#" onClick={handleLinkClick}>AI Design</a>
              <a href="#" onClick={handleLinkClick}>Content Studio</a>
              <a href="#" onClick={handleLinkClick}>Templates</a>
            </div>
          </div>

               <div className="nav-item">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                handleDropdownClick('developers');
              }}
            >
              Developers <FaChevronDown size={10} className={`dropdown-icon ${activeDropdown === 'developers' ? 'rotate' : ''}`} />
            </a>
            <div className={`dropdown-menu ${activeDropdown === 'developers' ? 'show' : ''}`}>
              <a href="#" onClick={handleLinkClick}>AI Design</a>
              <a href="#" onClick={handleLinkClick}>Content Studio</a>
              <a href="#" onClick={handleLinkClick}>Templates</a>
            </div>
          </div>

          
          <div className="nav-item">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                handleDropdownClick('agents');
              }}
            >
              Agents Platform <FaChevronDown size={10} className={`dropdown-icon ${activeDropdown === 'agents' ? 'rotate' : ''}`} />
            </a>
            <div className={`dropdown-menu ${activeDropdown === 'agents' ? 'show' : ''}`}>
              <a href="#" onClick={handleLinkClick}>AI Agents</a>
              <a href="#" onClick={handleLinkClick}>Automation</a>
            </div>
          </div>

          <a href="#" onClick={handleLinkClick}>Enterprise</a>
          <a href="/pricing" onClick={handleLinkClick}>Pricing</a>
        </div>

        <div className="nav-auth">
          <button className="btn-login"><a href="/" onClick={handleLinkClick}>Log in</a></button>
          <button className="btn-signup"><a href="/" onClick={handleLinkClick}>Sign up</a></button>
        </div>

        <button
          className="mobile-menu-icon"
          onClick={() => {
            setMobileMenuOpen(!mobileMenuOpen);
            // Reset dropdowns when closing mobile menu
            if (mobileMenuOpen) {
              setActiveDropdown(null);
            }
          }}
        >
          {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </nav>
    </>
  );
};

export default Header;