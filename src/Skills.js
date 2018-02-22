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


  render() {
  	const tools = this.state.tools;

  	const renderSkills = tools.map((tool) => (
  		<SkillTab 
  			name={tool.name}
  			desc={tool.desc}
  		/>
  	))

    return (
      <div className="skills">
      	<h1>Skills</h1>

      	<div className="skills--toggle">
      		<button>All</button>
      		<button>Day to Day</button>
      		<button>Learning</button>
      		<button>Old Tools</button>
      	</div>

      	<p className="skills--desc">
      		This is the list of shit I have been learning.
      	</p>

      	<div className="skills--list">
      		{renderSkills}
      	</div>

      </div>
    );
  }
}

export default Skills;
