import React, { Component } from 'react';
import uuid from 'uuid';

class AddHandy extends Component {
  constructor(){
    super();
    this.state = {
      newProject:{}
    }
  }

  handleSubmit(e){
    if(this.refs.to.value === ''){
      alert('Title is required');
    } else {
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
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>To</label><br />
            <input type="text" ref="to" />
          </div>
          <div>
            <label>From</label><br />
            <input type="text" ref="from" />
          </div>
          <div>
            <label>Time</label><br />
            <input type="text" ref="time" />
          </div>
          <div>
            <label>Date</label><br />
            <input type="text" ref="date" />
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
