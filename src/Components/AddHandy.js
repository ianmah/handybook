import React, { Component } from 'react';
import uuid from 'uuid';
import firebase from '../config/fbConfig.js';

class AddHandy extends Component {
  constructor(){
    super();
    this.state = {
      newProject:{}
    }
  }

  handleSubmit(e){
    if(this.refs.to.value === '' || this.refs.from.value === '' || this.refs.time.value === '' ||this.refs.date.value === ''){
      alert('Fill all fields please!');
    } else {
      const db = firebase.firestore();
      db.collection('users').add({
        to: this.refs.to.value,
        from: this.refs.from.value,
        time: this.refs.time.value,
        date: this.refs.date.value
      })
      this.setState({newProject:{
        id: uuid.v4(),
        to: this.refs.to.value,
        from: this.refs.from.value,
        time: this.refs.time.value,
        date: this.refs.date.value
      }}, function(){
        //console.log(this.state);
        this.props.addProject(this.state.newProject);
      });
    }
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h3>Add Booking</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <input type="text" ref="to" placeholder="Destination"/>
          </div>
          <div>
            <input type="text" ref="from" placeholder="From" />
          </div>
          <div>
            <input type="text" ref="time" placeholder="Time" pattern="^[0-2][0-9]:[0-5][0-9]$" title="00:00" />
          </div>
          <div>
            <input type="text" ref="date" placeholder="Date" pattern="^((0|1)\d{1})-((0|1|2)\d{1})-((19|20)\d{2})" title="mm-dd-yyyy" />
          </div>
          <br />
          <input type="submit" value="Submit" />
          <br />
        </form>
      </div>
    );
  }
}
export default AddHandy;
