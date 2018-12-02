import React, { Component } from 'react';
import HandyItem from './HandyItem';

class Handys extends Component {

  deleteProject(id){
    this.props.onDelete(id);
    }

    render() {
      let projectItems;
      if(this.props.projects){
        projectItems = this.props.projects.map(project => {
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
