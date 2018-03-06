import React, { Component } from 'react';
import './Introduction.css';
import Social from './Social';
import thumbnail from './me.png';

class Introduction extends Component {
  render() {
    return (
      <div className="introduction">
        <h1 className="introduction--header">
          Hi, I'm Joseph :)
        </h1>
        <p>
          I am a junior web developer who is seeking his first full-time developer role. Currently I work
          at a marketing agency as a IT / Help Desk Technician.
          My tools of choice are Javascript and HTML/CSS with React
          as my framework.
        </p>

        <p>
          I started learning how to code in 2015. Since then I have done a coding bootcamp, 
          worked as a front-end intern at a marketing agency and also had a small stint at a start-up. I continue to learn everyday, 
          mostly at a local Starbucks while sipping on a hot 
          caramel macchiatto.
        </p>

        <p>
          Thanks for stopping by!
          <br/>
          <b>Joseph Garcia</b>
        </p>
        <hr/>
        <Social />
      </div>
    );
  }
}

export default Introduction;
