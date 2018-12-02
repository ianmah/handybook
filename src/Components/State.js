import React, { Component } from 'react';
import Admin from './Admin';
import User from './User';

class State extends Component {

  render() {
    if (this.props.test === 'user'){
      console.log(this.props)
      return (
        <div className='State'>
        <User points = {this.props.apps} />
        </div>
      )
    } else {
      return (
        <div className='State'>
        <Admin points = {this.props.apps} />
        </div>
      )

    }

  }
}

export default State;
