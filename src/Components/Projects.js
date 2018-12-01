import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import Button from '@material-ui/core/Button';

class Projects extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {
    let projectItems;
    if(this.props.projects){
      projectItems = this.props.projects.map(project => {
        //console.log(project);
        return (
          <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
        );
      });
    }
    return (
      <div className="Projects">
        <h3>Current Bookings</h3>
        {projectItems}
        <br />
        <Button variant="contained" color="primary" type="submit" value="Submit">
         Confirm and Submit
        </Button>
      </div>
    );
  }
}

export default Projects;
