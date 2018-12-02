import React, { Component } from 'react';
import AddHandy from './AddHandy';
import Handys from './Handys';



class User extends Component {

handleAddProject(project){
  let projects= this.state.projects;
  projects.push(project);
  this.setState({projects:projects})
}

  render() {
      return (
        <div className='User'>
        <AddHandy addProject={this.handleAddProject.bind(this)}/>
        <Handys projects={this.props.points} />
        </div>
      )
}
}
export default User;
