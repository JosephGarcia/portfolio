import React, { Component } from 'react';
import '../css/SkillTab.css';

class SkillTab extends Component {
  render() {
    return (
      <div className="tab">
        <h4>{this.props.name}</h4>
        <p>{this.props.desc}</p>
      </div>
    );
  }
}

export default SkillTab;
