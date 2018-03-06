import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="about">

        <h1>Education</h1>
        <p>
          In 2015 I started learning how to code after seeing a couple treehouse ads on the television. I had already tried coding before but never really took it serious. I decided to enroll at a local coding bootcamp called Ironhack down here in Miami.
        </p>

        <p>
          Attending the coding bootcamp not only taught me how to learn but also how to effectively google. Anything can be learned as long as you know how to look for it. Since then I have googled pretty hard and ran into some great resources like Stack Overflow, Udemy and FreeCodeCamp.
        </p>

        <p>
          I also obtained my Associates Degree from Miami Dade College in 2017.
        </p>

      	<h2>Experience</h2>
      	<p>
          My first real experience with web development was when I enrolled in a coding bootcamp called Ironhack.
          We got to get a small taste of what web development was really like. We used technologies such as Ruby on Rails, Javascript, jQuery and Bootstrap just to name a couple of examples.
          Here is where I got a solid understanding of web development. 
        </p>

        <p>
          Shortly after, I got a internship at a marketing agency called Nobox. 
          At Nobox I got to learn how to work together with a team of web developers, graphic designers, copywriters and also real clients.
          I learned to work with LAMP stack and also got to learn some new technologies (media queries, Git Tower, PHP/Laravel).

        </p>
      	
        <h2>The Future</h2>
        <p>
          In the future I would love to start contributing to some of my favorites repositories on Github. I see myself still working out of Miami, I love it here and do not currently see any reasons why I should leave.
          I would really like to focus my energy on the front-end developer side of things by making aesthetic user interfaces and enjoyable user experiences.
        </p>

        <p>
          I hope to be working for a company that is involved in gaming, sports, social media or technology, most likely in a start-up enviroment.
          There is endless business possibilities in Miami. I would like to also see myself helping out small and local busineseses with the web development side of things.

        </p>


      	<h3>Fun Facts</h3>
      	<ul className="about--facts">
          <li>Born and Raised in Miami, Florida.</li>
      		<li>I have a chihuahua named Taco. He turns 8 this year.</li>
      		<li>I am a huge MMA fan. I plan on competeting in atleast one amateur mix martial arts fight within the next couple of years.</li>
      		<li>Before learning how to code I worked in the restaurant industry for 5+ years.</li>
      		<li>Parents are from hispanic descent. Mom is Honduran and Dad is from the Dominican Republic.</li>
      		<li>Dream vacation would be going to Thailand to train Muay Thai.</li>
      		<li>I try to go over web development material everyday for atleast 1-2 hours. Mostly at Starbucks.</li>
      		<li>I have an obsession with Chipotle. I eat it everyday. Sometimes twice.</li>
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
