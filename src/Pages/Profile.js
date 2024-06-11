import React, { useContext } from 'react';
import './Profile.css';
import { UserContext } from '../App';
import {  useNavigate } from 'react-router-dom';


const Profile = () => {
  const { userDetails, setIsAuth } = useContext(UserContext);
  const { username } = userDetails;
  const navigate = useNavigate();

  
 
  const displayName = username.split('@')[0];

  const handleSignOut = () => {
    localStorage.removeItem("userName");
    setIsAuth(false);
    console.log('Sign-out clicked');
    navigate("/");
  };

  return (
    <div className="profile-container">
      <div className="profile-content">
        <h1 className="profile-title">Profile</h1>
        <p className="profile-info">Username: {displayName}</p>
        <p className="profile-info">Email: {username}</p>
        <button className="profile-btn" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
