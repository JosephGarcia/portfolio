import React, { Component } from 'react';
import '../css/SkillTab.css';

class SkillTab extends Component {
  render() {
    const currentlyUsing = this.props.currentlyUsing;
    

    return (
      <div className="tab">
        <h4>
          {this.props.name}
          {currentlyUsing ? <i className="fas fa-heart red-heart"></i> : <i className="fas fa-heart grey-heart"></i>}
        </h4>
        <p>{this.props.desc}</p>
      </div>
    );
  }
}

export default SkillTab;
