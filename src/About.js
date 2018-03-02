import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="about">
      	<h1>About Me</h1>
      	<p>Lorem ipsum dolor amet narwhal coloring book ennui typewriter, trust fund affogato hammock selfies meh roof party austin. Put a bird on it affogato yr brunch tbh neutra normcore heirloom distillery master cleanse jianbing organic taxidermy tilde pickled. DIY lo-fi paleo keytar air plant ugh knausgaard lumbersexual aesthetic portland seitan bicycle rights unicorn hot chicken. Shaman taiyaki chambray direct trade ugh ramps keffiyeh vape brunch.</p>
      	<p>Kogi put a bird on it master cleanse XOXO godard, post-ironic polaroid. Deep v jean shorts fam, etsy farm-to-table squid pinterest locavore keytar prism kogi. Plaid subway tile man bun sriracha tbh, retro bicycle rights tousled vaporware godard try-hard. Glossier ramps letterpress succulents woke synth tacos umami vice 8-bit. Adaptogen post-ironic activated charcoal whatever. Prism gluten-free squid deep v celiac cliche meggings tbh gastropub tumeric.</p>
      	
      	<h2>Experience</h2>
      	<p>
          My first real experience with web development was when I enrolled in a coding bootcamp called Ironhack.
          We got to get a small taste of what web development was really like. We used technologies such as Ruby on Rails, Javascript, jQuery and Bootstrap just to name a couple of examples.
          Here is where I got a some what understanding of web development. 
        </p>

        <p>
          Shortly after, I got a internship at a marketing agency called Nobox. 
          At Nobox I got to learn how to work together with a team of web developers, graphic designers, copywriters and also real clients.
          I learned to work with LAMP stack and also got to learn some new technologies (media queries, working with SASS/Gulp, PHP/Laravel).

        </p>
      	
      	<h2>Education</h2>
      	<p>
          My education has not been the most traditional. I graduated from Miami Senior High in 2011. From 2011-2014 I went to Miami Dade College not really knowing in what direction I was heading, all I knew is that I was good with computers and problem solving.
        </p>

        <p>
          In 2015 I started learning how to code after seeing a couple treehouse ads on the television. I had already tried coding before but never really took it serious. I decided to enroll at a local coding bootcamp called Ironhack down here in Miami.
        </p>

        <p>
          Attending the coding bootcamp not only taught me how to learn but also how to effectively google. Anything can be learned as long as you know how to look for it. Since then I have googled pretty hard and ran into some great resources like Stack Overflow, Udemy and FreeCodeCamp.
        </p>

      	<h3>Fun Facts</h3>
      	<ul className="about--facts">
      		<li>I have a chihuahua named Taco. He turns 8 this year.</li>
      		<li>I am a huge MMA fan. I plan on competeting in atleast one amateur mix martial arts fight within the next couple of years.</li>
      		<li>Before learning how to code I worked in the restaurant industry for 5+ years.</li>
      		<li>I currently have one tattoo but plan to get more, including my leg, torso and right arm.</li>
      		<li>Parents are from hispanic descent. Mom is Honduran and Dad is from Dominican Republic.</li>
      		<li>Dream vacation would be going to Thailand to learn pure Muay Thai.</li>
      		<li>I try to go over web development material everyday for atleast 1-2 hours. Mostly at Starbucks.</li>
      		<li>My relationship with Chipotle is pretty serious. I eat it everyday. Sometimes twice.</li>
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
