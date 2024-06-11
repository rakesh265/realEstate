import React from "react";
import "./Home.css";
import Img1 from "../Images/appartment1.png";
import Img2 from "../Images/houseBanner.jpg";
import Img3 from "../Images/Xperties_in _ Rent a Property In Kochi.jpg";

const Home = () => {
  return (
    <>
      <div className="home-background">
        <div className="home-content">
          <span className="home-caption">Discover Your Ideal Residence</span>
          <div className="search-container">
            <div className="nav-options">
              <input
                type="radio"
                id="sales"
                name="property-type"
                defaultChecked
              />
              <label htmlFor="sales" className="nav-option">
                Sales
              </label>
              <input type="radio" id="rentals" name="property-type" />
              <label htmlFor="rentals" className="nav-option">
                Rentals
              </label>
            </div>
            <div className="search-bar">
              <div className="search-input-container">
                <input
                  type="search"
                  id="search-box"
                  className="search-input"
                  placeholder="Enter the City"
                />
              </div>
              <button className="search-button">SEE HOMES</button>
            </div>
          </div>
        </div>
      </div>
      <div className="options-container">
        <div className="option-card">
          <div className="option-image">
            <img src={Img1} alt="Buy a Home" />
          </div>
          <h3 className="option-title">Buy a home</h3>
          <p className="option-description">
            Find your place with an immersive photo experience and the most
            listings, including things you won't find anywhere else.
          </p>
         
        </div>

        <div className="option-card">
          <div className="option-image">
            <img src={Img3} alt="Rent a Home" />
          </div>
          <h3 className="option-title">Rent a home</h3>
          <p className="option-description">
            We're creating a seamless online experience – from shopping on the
            largest rental network, to applying, to paying rent.
          </p>
         
        </div>
        <div className="option-card">
          <div className="option-image">
            <img src={Img2} alt="Sell a Home" />
          </div>
          <h3 className="option-title">Explore Home Finder</h3>
          <p className="option-description">
            Trusted by many of the customer and have great customer rating. 
          </p>
          
        </div>
      </div>
    </>
  );
};

export default Home;
