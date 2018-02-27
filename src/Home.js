import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './Home.css';
import { push as Menu } from 'react-burger-menu';

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
		      <div className="main-grid" id="outer-container">
		      	<Menu 
		      		right 
		      		pageWrapId={"page-wrap"}
		      		outerCountainerId={"outer-container"}
		      	>
		      		<Link to="/">Home</Link>
		      		<Link to="/about">About</Link>
		      		<Link to="/skills">Skills</Link>
		      		<Link to="/contact">Contact</Link>
			      </Menu>
		      	<main id="page-wrap">
			        <Header />
			        <div className="content">
				        <Route exact path='/' component={Introduction} />
				        <Route path='/about' component={About} />
				        <Route path='/skills' component={Skills} />
				        <Route path='/contact' component={Contact} />
			        </div>
		        </main>
		      </div>
		    </Switch>
      </Router>
    );
  }
}

export default Home;
