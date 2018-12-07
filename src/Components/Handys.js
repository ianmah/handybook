import React, { Component } from 'react';
import HandyItem from './HandyItem';

class Handys extends Component {

    deleteItem(id){
      this.props.onDelete(id);
    }

    render() {
      let projectItems;
      if(this.props.projects){
        projectItems = this.props.projects.map(project => {
          console.log(project);
          return (
            <div>
            <HandyItem key={project.to} onDelete={this.deleteItem.bind(this)} project={project} />
            </div>
          );
        });
      }
      return (
        <div className="Projects">
          <h3>Current Bookings</h3>
          {projectItems}
        </div>
      );
    }
}
export default Handys;
// <AddHandy addProject={this.handleAddProject.bind(this)} />
