import React from "react";
import Carousel from './Carousel'
import Img1 from "../Images/Carousel1.jpg";
import Img2 from "../Images/Carousel2.jpg";
import Img3 from "../Images/Carousel3.jpg";
import "./Aboutus.css";

const AboutUs = () => {
  const images = [Img1, Img2, Img3];

  return (
   <>
   <div>
    <Carousel images={images}/>
   </div>
     <div className="about-container">
      <div className="about-section">
        <div className="about-box">
          <div className="about-content">
            <h2>Teamwork in Real Estate</h2>
            <p>Teamwork in real estate is crucial for success, as it combines diverse expertise to navigate the complex market effectively. Agents, brokers, appraisers, and administrative staff must collaborate seamlessly to manage transactions, meet client needs, and adapt to market changes. Effective communication, trust, and shared goals enhance efficiency and client satisfaction.</p>
          </div>
          <div className="about-image">
            <img src={images[0]} alt="Real estate team" />
          </div>
        </div>
      </div>

      <div className="about-section">
        <div className="about-box">
          <div className="about-image">
            <img src={images[1]} alt="Real estate professionals" />
          </div>
          <div className="about-content">
            <h2>Customer Interaction and Service</h2>
            <p>In the dynamic realm of real estate, customer interaction and service are the cornerstones of success. Effective communication, personalized attention, and responsive engagement form the bedrock of customer interaction. By fostering a culture of professionalism and offering expert guidance, real estate professionals can guide clients through the complexities of buying, selling, or renting properties with confidence.</p>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default AboutUs;
