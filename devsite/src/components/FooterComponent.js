import React from "react";
//import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-4 col-sm-2 offset-1">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Directory</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-sm-3 text-center">
            <h5>Social</h5>
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
