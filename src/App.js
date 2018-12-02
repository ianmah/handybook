import React, { Component } from 'react';
import State from './Components/State';
import './App.css';
import uuid from 'uuid';

class App extends Component {

  constructor() {
    super();
    this.state = { showUser: false,
    showAdmin: false,
    projects: [
      {id : uuid.v4(),
        to : "Doctor",
    from : "Home",
  time : "04:20",
  date : "12-08-2018"},

  {id : uuid.v4(),
    to : "Surgery",
  from : "Home",
  time : "04:20",
  date : "12-03-2018"}
    ] }
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
      { this.state.showUser && (<State test = "user" apps = {this.state.projects}/>)}
      { this.state.showAdmin && (<State test = "admin" apps = {this.state.projects}/>)}
      </div>
    )
  }
}

export default App;
