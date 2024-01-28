
import React from "react";
import "../Css/Footer.css"; // Import your footer styles here


const Footer = () => {
  return (
    <div className="footer">

    <div className="footer-content">

        <div className="footer-section">
          <h4>Company</h4>
          <p>About Us</p>
          <p>Our Team</p>
          <p>Contact</p>
        </div>
        <div className="footer-section">
          <h4>Useful Links</h4>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>FAQs</p>
        </div>

        {/* <div className="footer-section">
          <h4>Subscribe</h4>
          <p>Get updates on our latest products.</p>
        </div> */}
        <div className="footer-section">
          <h4>Social</h4>
          <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer">

            Instagram
          </a>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>123 Main Street, Cityville, Country</p>
          <p>Email: info@example.com</p>
          <p>Phone: +1 123-456-7890</p>
        </div>
      </div>

      <p>&copy; {new Date().getFullYear()} Your Company</p>

    </div>
  );
};

export default Footer;
