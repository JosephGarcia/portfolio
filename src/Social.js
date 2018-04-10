import React, { Component } from 'react';
import './Social.css';

class Social extends Component {
  render() {
    return (
      <div className="social">
        <div>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.facebook.com/joseph.garcia.900"
          >
            <i className="fab fa-facebook" />
            Facebook
          </a>
        </div>

        <div>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/ilovejoebeard/?hl=en"
          >
            <i className="fab fa-instagram" />
            Instagram
          </a>
        </div>

        <div>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/josephgarc/"
          >
            <i className="fab fa-linkedin" />
            LinkedIn
          </a>
        </div>

        <div>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/JosephGarcia"
          >
            <i className="fab fa-github" />
            Github
          </a>
        </div>

        <div>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:josephagarc@gmail.com"
          >
            <i className="far fa-envelope" />
            E-Mail
          </a>
        </div>
      </div>
    );
  }
}

export default Social;
