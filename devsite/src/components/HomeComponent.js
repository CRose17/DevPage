import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
/* import About from "./AboutComponent";
import Contact from "./ContactComponent";
import Projects from "./ProjectComponent"; */

class Home extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default Home;
