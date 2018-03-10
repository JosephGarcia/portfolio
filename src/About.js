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
          Attending the coding bootcamp not only taught me how to learn efficient programming but also how to effectively google. Anything can be learned as long as you know how to look for it.
        </p>

        <p>
          I also obtained my A.A in Computer Information Systems from Miami Dade College in 2017.
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
          I would really like to focus my efforts on front-end development by making aesthetic user interfaces and enjoyable user experiences.
        </p>

        <p>
          I hope to be working for a company that is involved in gaming, sports, social media or technology, most likely in a start-up environment.
          I would like to also see myself helping out small and local businesses with the web development side of things.

        </p>


      	<h2>Fun Facts</h2>
      	<ul className="about--facts">
          <li>Born and raised in Miami, Florida.</li>
      		<li>I have a chihuahua named Taco. He turns 8 this year.</li>
      		<li>I am a huge MMA fan. I plan on competeting in atleast one amateur mix martial arts fight within the next couple of years.</li>
      		<li>Before learning how to code I worked in the restaurant industry for 5+ years.</li>
      		<li>Dream vacation would be going to Thailand to train Muay Thai.</li>
      		<li>I try to go over web development material everyday for atleast 1-2 hours. Mostly at Starbucks.</li>
          <li>If I wasn't pursuing web development I would probably be studying psychology.</li>
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
