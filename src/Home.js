import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './Home.css';
import { push as Menu } from 'react-burger-menu';

import Header from './Header';
import Introduction from './Introduction';
import Portfolio from './Portfolio';
import About from './About';
import Skills from './Skills';
import NoMatch from './NoMatch';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			menuOpen: false
		};
	}

	handleStateChange(state) {
		this.setState({ menuOpen: state.isOpen });
	}

	closeMenu() {
		this.setState({ menuOpen: false });
	}

	toggleMenu() {
		this.setState({ menuOpen: !this.state.menuOpen });
	}

	render() {
		return (
			<Router>
				<div id="outer-container">
					<Menu
						isOpen={false}
						right
						pageWrapId={'page-wrap'}
						outerCountainerId={'outer-container'}
					>
						<Link to="/" onClick={() => this.closeMenu()}>
							<i className="fas fa-home" />
							Home
						</Link>
						<Link to="/portfolio" onClick={() => this.closeMenu()}>
							<i className="fas fa-code" />
							Portfolio
						</Link>
						<Link to="/about" onClick={() => this.closeMenu()}>
							<i className="fas fa-star" />
							About
						</Link>
						<Link to="/skills" onClick={() => this.closeMenu()}>
							<i className="fas fa-keyboard" />
							Skills
						</Link>
					</Menu>

					<main id="page-wrap">
						<Header />
						<div className="content">
							<Switch>
								<Route
									exact
									path="/"
									component={Introduction}
								/>
								<Route
									path="/portfolio"
									component={Portfolio}
								/>
								<Route path="/about" component={About} />
								<Route path="/skills" component={Skills} />
								<Route component={NoMatch} />
							</Switch>
						</div>
					</main>
				</div>
			</Router>
		);
	}
}

export default Home;
