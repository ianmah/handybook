import React, { Component } from 'react';

class HandyItem extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {
    return (
      <li className="Project">
        <strong>{this.props.project.to}</strong>: {this.props.project.from} : {this.props.project.time} : {this.props.project.date}
      </li>
    );
  }
}

export default HandyItem;
