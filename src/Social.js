import React, { Component } from 'react';
import './Social.css';

class Social extends Component {
  render() {
    return (
        <div className="social">

          <div>
            <a target="_blank" href="https://www.facebook.com/joseph.garcia.900">
              <i className="fab fa-facebook"></i>
              Facebook
            </a>
          </div>

          <div>
            <a target="_blank" href="https://www.instagram.com/ilovejoebeard/?hl=en">
              <i className="fab fa-instagram"></i>
              Instagram
            </a>
          </div>

          <div>
            <a target="_blank" href="https://twitter.com/dirtyjoeee">
              <i className="fab fa-twitter"></i>
              Twitter
            </a>
          </div>

          <div>
            <a target="_blank" href="https://www.linkedin.com/in/josephgarc/">
              <i className="fab fa-linkedin"></i>
              LinkedIn
            </a>
          </div>

          <div>
            <a target="_blank" href="https://github.com/JosephGarcia">
              <i className="fab fa-github"></i>
              Github
            </a>
          </div>

        </div>
    );
  }
}

export default Social;
