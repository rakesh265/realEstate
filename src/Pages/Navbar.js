import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import "./Navbar.css";
import { UserContext } from '../App'; 

const Navbar = () => {
  const { isAuth } = useContext(UserContext);

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className={`sidenav ${isSidebarOpen ? "open" : "close"}`}>
        <span className="closebtn" onClick={toggleSidebar}>
          <ImCross />
        </span>
        <Link to="/" className="brand">Out East</Link>
        <Link to="/buy">Buy</Link>
        <Link to="/rent">Rent</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/blog">Blog</Link>
        {isAuth ? (
          <Link to="/profile">Profile</Link>
        ) : (
          <>
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </div>
      <nav className="navbar">
        <div className="sidebar" onClick={toggleSidebar}>
          <FaBars />
        </div>
        <div className="navbar-section navbar-start">
          <ul>
            <li>
              <Link to="/rent">Rent</Link>
            </li>
            <li>
              <Link to="/buy">Buy</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-brand">
          <Link to="/">Home Finder</Link>
        </div>
        <div className="navbar-section navbar-end">
          <ul>
            {isAuth ? (
              <li className="navlink">
                <Link to="/profile">Profile</Link>
              </li>
            ) : (
              <>
                <li className="navlink">
                  <Link to="/signin">Sign In</Link>
                </li>
                <li className="navlink">
                  <Link to="/signup">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
