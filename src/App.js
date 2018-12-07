import React, { Component } from 'react';
import State from './components/State';
import './App.css';
import firebase from './config/fbConfig.js';

class App extends Component {

  constructor() {
      super();

      const db = firebase.firestore();
      db.collection('users').get().then((snapshot) => {
        //console.log(snapshot.docs);
        snapshot.docs.forEach(doc => {
          let booking = doc.data();
          booking.id = doc.id;
          let projects= this.state.projects;
          projects.push(booking);
          console.log(booking)
          this.setState({projects:projects})

        })
      })
      this.state = {
          showUser: false,
          showAdmin: false,
          projects: []
      }
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
