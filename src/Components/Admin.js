import React, { Component } from 'react';
import Handys from './Handys';

class Admin extends Component {
  
  render() {
      return (
        <div className='Admin'>
        <Handys projects={this.props.points} />
        </div>
      )
}
}
export default Admin;
