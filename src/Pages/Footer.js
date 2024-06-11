import React from "react";
import { FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Home Finder</h3>
            <p>Your destination for all real estate listings and rental properties.</p>
            <div className="social-icons">
              <Link to="#"><FaFacebook /></Link>
              <Link to="#"><FaTwitter /></Link>
              <Link to="#"><FaInstagram /></Link>
            </div>
          </div>
          <div className="footer-section">
            <h3>Explore </h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/buy">Buy</Link></li>
              <li><Link to="/rent">Rent</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Support</h3>
            <ul>
              <li><Link to="#">Help</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/aboutus">Contact us</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
