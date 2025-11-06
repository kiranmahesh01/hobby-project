import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Momntum<span className="logo-accent">-AI</span></h3>
            <p className="footer-tagline">Purposeful Innovation. Real Human Needs. Real Solutions.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Our Values</h4>
            <ul>
              <li>Purpose-Driven</li>
              <li>Sustainable Innovation</li>
              <li>Empowerment</li>
              <li>Ethical Technology</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Get in touch with us</p>
            <Link to="/contact" className="footer-contact-btn">Contact Us</Link>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Momntum-AI. All rights reserved.</p>
          <p className="footer-mission">Technology that solves problems, not creates them.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

