import React from 'react';
import { Link } from 'react-router-dom';
import './Nopage.css';

const Nopage = () => {
  return (
    <div className="no-page-container">
      <h1 className="no-page-title">404</h1>
      <p className="no-page-message">Page Not Found</p>
      <Link to="/" className="no-page-link">Go to Home</Link>
    </div>
  );
};

export default Nopage;
