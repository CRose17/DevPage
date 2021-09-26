import React, { Component } from "react";
import { Navbar, NavbarBrand, Jumbotron } from "reactstrap";
import devLogo from "../images/newDevLogo.png";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1 className="text-light">Cameron Rosenberger</h1>
                <h2 className="text-light">
                  I'm an aspiring web and app developer
                </h2>
              </div>
            </div>
          </div>
        </Jumbotron>

        <Navbar dark sticky="top">
          <div className="container">
            <NavbarBrand className="mr-auto" href="/">
              <img
                className="devLogo"
                src={devLogo}
                height="80"
                width="120"
                alt="Developer Logo"
              />
            </NavbarBrand>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
