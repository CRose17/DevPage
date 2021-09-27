import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import heroImage from "../images/headerImage.jpg";

class Home extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="hero-content">
            <img className="hero" src={heroImage} />
            <h1 className="hero-title">Hi, I'm Cameron Rosenberger</h1>
            <h2 className="hero-subtitle">aspiring web and app developer</h2>
          </div>
        </div>
      </Router>
    );
  }
}

export default Home;
