import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  handleClick = e => {
    e.preventDefault();
    this.props.toggleMenu();
    console.log('wtf');
  };

  render() {
    return (
      <div className="header">
        <div className="header--logo">
          <h2 className="inside--logo">JG</h2>
          <div className="rotating-logo rotating" />
        </div>

        <div className="header--links">
          <ul className="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
