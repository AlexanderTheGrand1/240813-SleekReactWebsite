import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="social-icons">
        <FaFacebook className="social-icon" />
        <FaTwitter className="social-icon" />
        <FaInstagram className="social-icon" />
      </div>
      <p>&copy; 2024 Fantastic Site. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
