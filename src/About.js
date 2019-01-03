import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="about">

        <h1>Education</h1>
        <p>
          In 2015, I started learning how to code after seeing a couple treehouse ads on the television. I had already tried coding before but never really took it serious. I decided to enroll at a local coding bootcamp called Ironhack down in Miami, FL.
        </p>

        <p>
          A couple of years after finishing the bootcamp, I was still struggling with finding any real job prospects in the web development field.
          When I first started coding I had dropped out of college to see if the bootcamp would indeed help me get employed.
        </p>

        <p>
          Although it is quite possible to get a job without a degree, 
          I decided it would be best for me to finish college. In 2018, I obtained my Associate's Degree and was able to transfer to the Computer Science program at Florida International University.
        </p>

      	<h2>Experience</h2>
      	<p>
          My first real experience with web development was when I enrolled in a coding bootcamp called Ironhack.
          We received a small taste of what web development was really like. We used technologies such as Ruby on Rails, Javascript, jQuery and Bootstrap just to name a couple of examples.
          Through this experience is where I gained a solid understanding of web development. 
        </p>

        <p>
          Shortly after, I received an internship at a marketing agency called Nobox. 
          At Nobox, I learned how to collaborate with a team of web developers, graphic designers, copywriters and real clients to meet their every demands.
          I learned to work with LAMP Stack and also got to learn some new software such as media queries, Git Tower, PHP/Laravel.

        </p>
      	
        <h2>The Future</h2>
        <p>
          In the future, I would love to start contributing to some of my favorite repositories on Github.
          I hope to be working for a company that is involved in gaming, aerospace, sports, social media or even maybe the Big 4.
        </p>


      	<h2>Fun Facts</h2>
      	<ul className="about--facts">
          <li>Born and raised in Miami, Florida.</li>
      		<li>I have a chihuahua named Taco. He turns 9 this year.</li>
      		<li>I am a huge MMA fan. I plan on competeting in atleast one amateur mix martial arts fight within the next couple of years.</li>
      		<li>Before learning how to code I worked in the restaurant industry for 5+ years.</li>
      		<li>Dream vacation would be going to Thailand to train Muay Thai.</li>
      		<li>I try to go over web development material everyday for atleast 1-2 hours. Mostly at Starbucks.</li>
          <li>On my downtime I like to binge watch Joe Rogan podcasts.</li>
      	</ul>
      	<div className="about--quote">
      		<p>
      			Adversity causes some men to break; others to break records.	
      		</p>
      		<p>
      			- William Arthur Ward
      		</p>
      	</div>
      </div>
    );
  }
}

export default About;
