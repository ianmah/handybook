import React, { Component } from 'react';

class HandyItem extends Component {

  deleteItem(e){
    //console.log(this.props.project.id)
    this.props.onDelete(this.props.project.id)
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
        <br />
        <br />
        <button onClick={this.deleteItem.bind(this)}>Remove</button>
      </li>
    );
  }
}

export default HandyItem;
