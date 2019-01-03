import React, { Component } from 'react';
import './Introduction.css';
import Social from './Social';

class Introduction extends Component {
  render() {
    return (
      <div className="introduction">
        <h1 className="introduction--header">
          Aspiring Software Engineer. Part-Time Human Punching Bag. Single Dog Dad.
        </h1>
        <p>
          My name is <b>Joseph Garcia</b>. I am currently a Computer Science
          student at Florida International University. In 2015 I began teaching
          myself how to code. Since then, I have completed a coding bootcamp and
          worked as a front-end development intern at a marketing agency.
        </p>
        <p>
          Away from the screen, I love to socialize and practice mixed martial
          arts. I continue to learn everyday, mostly at a local Starbucks while
          sipping on a iced cinnamon almond milk macchiato.
        </p>

        <p>Thanks for stopping by!</p>
        <hr />
        <Social />
      </div>
    );
  }
}

export default Introduction;
