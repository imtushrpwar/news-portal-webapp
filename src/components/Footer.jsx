import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 pt-4 pb-2">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-3">
            <h5>About NewsPortal</h5>
            <p>
              NewsPortal brings you the latest and most reliable news from
              around the world. Stay informed with updates in politics,
              technology, sports, and more.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/category/Technology"
                  className="text-white text-decoration-none"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  to="/category/Sports"
                  className="text-white text-decoration-none"
                >
                  Sports
                </Link>
              </li>
              <li>
                <Link
                  to="/category/Politics"
                  className="text-white text-decoration-none"
                >
                  Politics
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact or Social */}
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <div>
              <a
                href="https://facebook.com"
                className="text-white me-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook"></i> Facebook
              </a>
              <br />
              <a
                href="https://twitter.com"
                className="text-white me-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-twitter"></i> Twitter
              </a>
              <br />
              <a href="mailto:contact@newsportal.com" className="text-white">
                <i className="bi bi-envelope"></i> Email Us
              </a>
            </div>
          </div>
        </div>

        <hr className="border-light" />

        <div className="text-center small">
          © {new Date().getFullYear()} NewsPortal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
