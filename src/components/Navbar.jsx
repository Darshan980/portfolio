import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <span>Dev</span>Portfolio
          </Link>
          
          {/* Desktop Menu */}
          <div className="navbar-menu">
            <Link 
              to="/" 
              className={location.pathname === "/" ? "active" : ""}
            >
              Home
            </Link>
            <Link 
              to="/projects" 
              className={location.pathname === "/projects" ? "active" : ""}
            >
              Projects
            </Link>
            <Link 
              to="/resume" 
              className={location.pathname === "/resume" ? "active" : ""}
            >
              Resume
            </Link>
            <Link 
              to="/contact" 
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="navbar-toggle" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
        
        {/* Mobile Overlay */}
        <div 
          className={`mobile-overlay ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(false)}
        ></div>
        
        {/* Mobile Menu */}
        <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
          <Link 
            to="/" 
            className={location.pathname === "/" ? "active" : ""}
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link 
            to="/projects" 
            className={location.pathname === "/projects" ? "active" : ""}
            onClick={handleLinkClick}
          >
            Projects
          </Link>
          <Link 
            to="/resume" 
            className={location.pathname === "/resume" ? "active" : ""}
            onClick={handleLinkClick}
          >
            Resume
          </Link>
          <Link 
            to="/contact" 
            className={location.pathname === "/contact" ? "active" : ""}
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
