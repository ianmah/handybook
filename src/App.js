import React, { Component } from 'react';
import State from './Components/State';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = { showUser: false,
    showAdmin: false }
  }

  _showMessage = (bool) => {
    this.setState({
      showUser: bool,
      showAdmin: !bool
    })
  }

  render() {
    return (
      <div className='App'>
      <h1> HandyBook </h1>
      <button onClick = {this._showMessage.bind(null, true)} >user</button>
      <button onClick = {this._showMessage.bind(null, false)} >admin</button>
      { this.state.showUser && (<State test = "user"/>)}
      { this.state.showAdmin && (<State test = "admin"/>)}
      </div>
    )
  }
}

export default App;
