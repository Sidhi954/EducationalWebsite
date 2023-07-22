import React from "react";
import Info from "./Info";
import Description from "./Description";
import Footer from "./Footer";
import './my.css';

const img1 =
  "https://www.21kschool.com/blog/wp-content/uploads/2022/09/5-Benefits-of-Personalized-Learning.png";

const Home = () => {
  return (
    <>
      <div class="how-section">
        <div className="container">
          <div className="col-md-7 how-img">
            <img src={img1} alt="" className="img-fluid" id="img1" />
          </div>
          <div className="col-md-8 mx-auto">
            <div className="main">
              <p className="intro-data">Welcome to</p>
              <h1 className="subheading">Smart Study</h1>
              <p className="quote">Knowledge at your FingerPrints... </p>
            </div>
          </div>
        </div>
      </div>
      <Info />
      <Description/>
      <Footer/>
    </>
  );
};

export default Home;
