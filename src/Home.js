import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';
import './Home.css';

import Header from './Header';
import Introduction from './Introduction';
import About from './About'; 
import Skills from './Skills';
import Contact from './Contact';

class Home extends Component {
  render() {
    return (
    	<Router>
	    	<Switch>
		      <div className="main">
		        <Header />
		        <div className="content">
			        <Route exact path='/' component={Introduction} />
			        <Route path='/about' component={About} />
			        <Route path='/skills' component={Skills} />
			        <Route path='/contact' component={Contact} />
		        </div>
		      </div>
		    </Switch>
      </Router>
    );
  }
}

export default Home;
