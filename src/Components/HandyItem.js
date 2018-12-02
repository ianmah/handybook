import React, { Component } from 'react';

class HandyItem extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {
    return (
      <li className="Project">
        <strong>{this.props.project.to}</strong>: {this.props.project.from}
        <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
      </li>
    );
  }
}

export default HandyItem;
