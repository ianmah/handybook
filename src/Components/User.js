import React, { Component } from 'react';
import HandyItem from './HandyItem';
import uuid from 'uuid';

class User extends Component {
  constructor() {
      super();
      this.state = { projects: [
        {id : uuid.v4(),
          to : "doctor",
      from : "WHOREHOUSE",
    time : "04:20",
  date : "10-09-1969"},

    {id : uuid.v4(),
      to : "penis enlargement",
  from : "home",
time : "04:20",
date : "10-09-2069"}
      ]}
  }

  deleteProject(searchid){
      // this.state.projects.splice(this.state.projects.findIndex(element => element.to === "penis enlargement"), 1);
      this.setState({})

    }

    render() {
      let projectItems;
      if(this.state.projects){
        projectItems = this.state.projects.map(project => {
          console.log(project);
          return (
            <HandyItem onDelete={this.deleteProject.bind(this)} key={project.to} project={project} />
          );
        });
      }
      return (
        <div className="Projects">
          <h3>Latest Projects</h3>
          {projectItems}
        </div>
      );
    }
}
export default User;
