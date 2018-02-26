import React, { Component } from 'react';
import './Social.css';

class Social extends Component {
  render() {
    return (
        <div className="social">

          <div>
            <a href="#">
              <i className="fab fa-facebook"></i>
              Facebook
            </a>
          </div>

          <div>
            <a href="#">
              <i className="fab fa-instagram"></i>
              Instagram
            </a>
          </div>

          <div>
            <a href="#">
              <i className="fab fa-twitter"></i>
              Twitter
            </a>
          </div>

          <div>
            <a href="#">
              <i className="fab fa-linkedin"></i>
              Linkedin
            </a>
          </div>

          <div>
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
