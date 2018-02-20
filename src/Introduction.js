import React, { Component } from 'react';
import './Introduction.css';
import Social from './Social';

class Introduction extends Component {
  render() {
    return (
      <div className="introduction">
        <h1 className="introduction--header">
          Hello! I am Joseph.
        </h1>
        <p>
          Lorem ipsum dolor amet mumblecore 8-bit gentrify, bicycle rights pour-over tousled man braid knausgaard chillwave pitchfork chambray tote bag venmo four dollar toast. Iceland tilde mlkshk, master cleanse chartreuse helvetica intelligentsia enamel pin blog unicorn meggings portland health goth. Kombucha try-hard disrupt listicle, you probably haven't heard of them tumeric affogato franzen. Fixie brooklyn kickstarter, blue bottle put a bird on it vaporware iPhone.
        </p>
        <hr/>
        <Social />
      </div>
    );
  }
}

export default Introduction;
