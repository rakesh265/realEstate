import React from "react";
import { Link } from 'react-router-dom';
import "./Signup.css";

const Signup = () => {
  return (
    <>
      <div className="signup-container">
        <form className="signup-form">
          <h1 className="signup-title">Sign Up</h1>
          <label className="signup-formlabel">Full Name</label>
          <input type="text" className="signup-input"/>
          <label className="signup-formlabel">User Name</label>
          <input type="email" className="signup-input"/>
          <label className="signup-formlabel">Set Password</label>
          <input type="password" className="signup-input"/>
          <div className="signup-account">
            <span>
              <p>Already have an account?</p>
              <Link to='/signin'>Sign In</Link>
            </span>
          </div>
          <button className="signup-btn">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
