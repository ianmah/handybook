import React, { Component } from 'react';
import AddHandy from './AddHandy';
import Handys from './Handys';
import firebase from '../config/fbConfig.js';

class User extends Component {
  constructor() {
      super();
      this.state = {}
  }
  componentDidMount(){
    this.setState(this.props.points)
  }

handleAddProject(project){
  let projects= this.props.points;
  projects.push(project);
  this.setState({projects:projects})
}

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
        <div className='User'>
        <AddHandy addProject={this.handleAddProject.bind(this)}/>
        <Handys projects={this.props.points} onDelete={this.handleDelete.bind(this)} />
        </div>
      )}
}
export default User;
