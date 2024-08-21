import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

const Footer = () => {
  return (
    <footer className="bg-black footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-heading">About Us</h3>
            <p className="footer-text">
              We are a leading electronics retailer, providing top-notch products and services to our customers. Our mission is to bring the latest and greatest in technology to you.
            </p>
          </div>
          
          <div>
            <h3 className="footer-heading">Contact Us</h3>
            <p className="footer-text">
              Email: support@example.com<br />
              Phone: (123) 456-7890<br />
              Address: 123 Main Street, City, Country
            </p>
          </div>
          
          <div>
            <h3 className="footer-heading">Follow Us</h3>
            <div className="footer-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
