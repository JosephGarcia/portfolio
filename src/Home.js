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
	constructor(props) {
		super(props);

		this.state = {
			menuOpen: false
		}
	}

	handleStateChange(state) {
		this.setState({menuOpen: state.isOpen});
	}

	closeMenu() {
		this.setState({menuOpen: false});
	}

	toggleMenu() {
		this.setState({menuOpen: !this.state.menuOpen});
	}

  render() {
    return (
    	<Router>
	    	<Switch>
		      <div id="outer-container">

		      	<Menu 
		      		isOpen={false}
		      		right 
		      		pageWrapId={"page-wrap"}
		      		outerCountainerId={"outer-container"}
		      	>
		      		<Link to="/" onClick={() => this.closeMenu()}>
		      			<i className="fas fa-home"></i>
		      			Home
		      		</Link>
		      		<Link to="/about" onClick={() => this.closeMenu()}>
		      			<i className="fas fa-star"></i>
		      			About
		      		</Link>
		      		<Link to="/skills" onClick={() => this.closeMenu()}>
		      			<i className="fas fa-keyboard"></i>
		      			Skills
		      		</Link>
		      		<Link to="/contact" onClick={() => this.closeMenu()}>
		      			<i className="fas fa-envelope"></i>
		      			Contact
		      		</Link>
			      </Menu>

		      	<main id="page-wrap">
			        <Header/>
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
