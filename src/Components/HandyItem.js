import React, { Component } from 'react';

class HandyItem extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {
    return (
      <li className="Project">
        <h2>{this.props.project.to}</h2>
        <strong>From:</strong> {this.props.project.from}
        <br />
        <strong>Time:</strong> {this.props.project.time}
        <br />
        <strong>Date:</strong> {this.props.project.date}
      </li>
    );
  }
}

export default HandyItem;
