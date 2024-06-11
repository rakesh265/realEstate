import React, { useState, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./Signin.css";
import { UserContext } from '../App'; 

const Signin = () => {
  const [emailInput, setEmailInput] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { setIsAuth, setUserDetails } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (emailInput === "" || password === "") {
      setErrorMsg("Please provide both email and password");
    } else {
      setErrorMsg("");
      localStorage.setItem("userName", emailInput);
      setUserDetails({ username: emailInput });
      setIsAuth(true);
      navigate("/");
    }
  };

  return (
    <>
      <div className="signin">
        <form className="form" onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          {errorMsg && <p className="error">{errorMsg}</p>}
          <label className="form-label">Email</label>
          <input 
            type="email" 
            className="input" 
            value={emailInput} 
            onChange={(e) => setEmailInput(e.target.value)} 
          />
          <label className="form-label">Password</label>
          <input 
            type="password" 
            className="input" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <div className="account">
            <span>Forgot password</span>
            <span>Don't have an account? <Link to='/signup'>Sign Up</Link></span>
          </div>
          <button type="submit" className="signin-btn">Sign In</button>
        </form>
      </div>
    </>
  );
};

export default Signin;
