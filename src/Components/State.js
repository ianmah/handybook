import React, { Component } from 'react';
import Admin from './Admin';
import User from './User';

class State extends Component {

  render() {
    if (this.props.test === 'user'){
      return (
        <div className='State'>
        <User />
        </div>
      )
    } else {
      return (
        <div className='State'>
        <Admin />
        </div>
      )

    }

  }
}

export default State;
