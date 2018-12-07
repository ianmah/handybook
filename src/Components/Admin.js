import React, { Component } from 'react';
import Handys from './Handys';
import firebase from '../config/fbConfig.js';

class Admin extends Component {


  handleDelete(id){
    let projects = this.props.points;
    console.log('ID: ' + id)
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});

    const db = firebase.firestore();
    db.collection('users').doc(id).delete();
  }

  render() {
      return (
        <div className='Admin'>
        <Handys projects={this.props.points } onDelete={this.handleDelete.bind(this)}/>
        </div>
      )
}
}
export default Admin;
