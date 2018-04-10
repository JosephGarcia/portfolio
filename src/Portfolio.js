import React from 'react';
import './Portfolio.css';
import img from './img/maps-react.jpg';

const Portfolio = () => (
	<div className="portfolio">
		<h1 className="portfolio__header">Portfolio</h1>
		<div className="portfolio__content">
			<figure className="portfolio__item">
				<img
					className="portfolio__img"
					src={img}
					alt="React maps project"
				/>
			</figure>
			<div className="portfolio__info">
				<h3>Zillow Clone</h3>
				<p className="portfolio__text">
					Application was created with React using the Google Maps
					API. You can filter the listings according to number of
					bedrooms, setting minumum and maximum price and toggle from
					high to low / low to high. Website is responsive and used
					CSS Grid to setup the UI.
				</p>
				<span>
					<a href="#">Code</a> | <a href="#">Demo</a>
				</span>
			</div>
		</div>
	</div>
);

export default Portfolio;
