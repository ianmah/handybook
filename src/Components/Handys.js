import React, { Component } from 'react';
import HandyItem from './HandyItem';
import uuid from 'uuid';

class Handys extends Component {
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

  deleteProject(project){
    console.log(this)
      console.log(project)

     var copy = this.state.projects.filter(element => element.id === project)
     this.setState(copy)
     this.forceUpdate();
      // this.state.projects.splice(this.state.projects.findIndex(element => element.to === "penis enlargement"), 1);
      // var copy = User.state.projects.filter(function() {for (var i = 0; i < this.state.projects.length; i++) {
      //   var test = this.state.projects[i];
      //   if (test.id === project) {
      //     return true;
      //   }
      // }});
     // copy.filter(element => element.id===id)
       // this.setState(copy)

    }

    handleAddProject(project) {
      let projects = this.state.projects;
      projects.push(project);
      this.setState({projects:projects})
    }

    render() {
      let projectItems;
      if(this.state.projects){
        projectItems = this.state.projects.map(project => {
          console.log(project);
          return (
            <div>

            <HandyItem onDelete={this.deleteProject.bind(this)} key={project.to} project={project} />
            </div>
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
export default Handys;
// <AddHandy addProject={this.handleAddProject.bind(this)} />
