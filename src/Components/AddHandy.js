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
    if(this.refs.to.value === '' || this.refs.from.value === '' || this.refs.time.value === '' ||this.refs.date.value === ''){
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
        <h3>Add Booking</h3>
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
            <input type="text" ref="time" pattern="[0-9]{2}:[0-9]{2}" title="00:00" />
          </div>
          <div>
            <label>Date</label><br />
            <input type="text" ref="date" pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}" title="mm-dd-yyyy" />
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
