import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-4 col-sm-2 offset-1">
            <h5 className="text-light">Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-sm-3 text-center">
            <h5 className="text-light">Social</h5>
            <a
              className="btn btn-social-icon btn-github"
              href="http://github.com/CRose17"
            >
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-linkedin"
              href="http://linkedin.com/in/cameron-rosenberger/"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>{" "}
          </div>
          <div className="col-sm-4 text-center">
            <a role="button" className="btn btn-link" href="tel:+12063532553">
              <i className="fa fa-phone" /> 1-206-353-2553
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link"
              href="mailto:cameron@crosendeveloper.com"
            >
              <i className="fa fa-envelope-o" /> cameron@crosendeveloper.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
