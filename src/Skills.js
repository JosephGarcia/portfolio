import React, { Component } from 'react';
import {tools} from './helpers';
import SkillTab from './components/SkillTab'
import './Skills.css';

class Skills extends Component {
	state = {
		tools: [],
	}

	componentDidMount(){
		this.setState({tools});
	}

  mouseOver() {
    console.log("yolo");
  }


  render() {
  	const tools = this.state.tools;

  	const renderSkills = tools.map((tool, key) => (
  		<SkillTab 
  			key={key}
  			name={tool.name}
  			desc={tool.desc}
  			currentlyUsing={tool.currentlyUsing}
        onMouseOver={this.mouseOver}
  		/>
  	))

    return (
      <div className="skills">
      	<h1>Skills</h1>

      	<p className="skills--desc">
			These are the tools / languages that I currently work with or have worked with in the past.
      	</p>

      	<div className="skills--list">
      		{renderSkills}
      	</div>

      	<ul className="rules">
      		<li className="rules--active">
      			<p>
      				<i className="fas fa-heart red-heart"></i>
      				= Using daily / frequently
      			</p>
      		</li>
      		<li className="rules--disabled">
      			<p>
      				<i className="fas fa-heart grey-heart"></i>
      				= Not in use 
      			</p>
      		</li>
      	</ul>
      </div>
    );
  }
}

export default Skills;
