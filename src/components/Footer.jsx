import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; // Ensure this file is in the same folder

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & Copyright */}
        <div className="footer-logo">
          <h2>Dev<span>Portfolio</span></h2>
          <p className="footer-text">&copy; {new Date().getFullYear()} All Rights Reserved</p>
        </div>

        {/* Navigation Links */}
        <nav className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Social Media Links */}
        <div className="footer-social">
          <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
            <img src="/github-icon.svg" alt="GitHub" />
          </a>
          <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin-icon.svg" alt="LinkedIn" />
          </a>
          <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer">
            <img src="/twitter-icon.svg" alt="Twitter" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
