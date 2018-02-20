import React, { Component } from 'react';
import './Social.css';

class Social extends Component {
  render() {
    return (
        <div className="social">

          <div className="social--button">
            <a href="#">
              <i className="fab fa-facebook"></i>
              Facebook
            </a>
          </div>

          <div className="social--button">
            <a href="#">
              <i className="fab fa-instagram"></i>
              Instagram
            </a>
          </div>

          <div className="social--button">
            <a href="#">
              <i className="fab fa-twitter"></i>
              Twitter
            </a>
          </div>

          <div className="social--button">
            <a href="#">
              <i className="fab fa-linkedin"></i>
              Linkedin
            </a>
          </div>

          <div className="social--button">
            <a href="#">
              <i className="fab fa-github"></i>
              Github
            </a>
          </div>

        </div>
    );
  }
}

export default Social;
