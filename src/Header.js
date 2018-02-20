import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (

      <div className="header">

        <div className="header--initials">
          <h2>JG.</h2>
        </div>

        <div className="header--links">
          <ul className="links">
          <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">
                About
              </Link>
            </li>
            <li>
              <Link to="/skills">
                Skills
              </Link>
            </li>
            <li>
              <Link to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
