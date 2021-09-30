import React, { Component } from "react";
import heroImage from "../images/headerImage.jpg";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="hero-content">
          <img className="hero" src={heroImage} alt="" />
          <h1 className="hero-title">Hi, I'm Cameron Rosenberger</h1>
          <h2 className="hero-subtitle">aspiring web and app developer</h2>
        </div>
      </div>
    );
  }
}

export default Home;
