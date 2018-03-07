import React, { Component } from 'react';
import './Contact.css';
import Social from './Social';

class Contact extends Component {
  render() {
    return (
    	<div className="contact">
    		<h1>Contact</h1>
    		<p>Thanks for stopping by!</p>

    		<p>
	    		If you would like to get in touch with me, please send me an email to <a className="red-heart" href="mailto:josephagarc@gmail.com">josephagarc@gmail.com</a> or 
	    		connect with me through any of my social media channels listed below.
    		</p>
    		<hr/>
    		<Social />
    	</div>
    );
  }
}

export default Contact;
