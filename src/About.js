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
      	<p>Polaroid next level synth, jean shorts pinterest pickled 90's. Flannel cliche meditation fingerstache yuccie intelligentsia williamsburg brunch iPhone swag kitsch. Edison bulb hashtag poke scenester selvage listicle artisan pinterest master cleanse chillwave fixie. Whatever four loko next level leggings flannel.</p>
      	
      	<h2>Education</h2>
      	<p>Vice synth butcher raw denim. Humblebrag kinfolk hoodie air plant shoreditch. Direct trade stumptown raw denim, hexagon helvetica polaroid af church-key banh mi fam intelligentsia chicharrones subway tile. Keffiyeh venmo pitchfork locavore. Farm-to-table jianbing semiotics PBR&B letterpress, glossier unicorn twee. Iceland ramps green juice cliche, raw denim health goth kickstarter shaman.</p>

      	<h3>Fun Facts</h3>
      	<ul className="about--facts">
      		<li>I have a chihuahua named Taco. He turns 9 this year.</li>
      		<li>I am a huge MMA fan. I train 3-5+ a week depending on my work schedule. I plan on competeting in atleast one amateur fight this year.</li>
      		<li>I was born and raised in Miami.</li>
      		<li>I currently have one tattoo but plan to get more, including my leg, torso and right arm.</li>
      		<li>Parents are from hispanic descent. Mom is Honduran and Dad is from Dominican Republic.</li>
      		<li>I am an only child.</li>
      		<li>I'll probably have a hot girlfriend soon.</li>
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
