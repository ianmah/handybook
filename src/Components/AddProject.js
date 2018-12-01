import React, { Component } from 'react';
import uuid from 'uuid';
import Button from '@material-ui/core/Button';

class AddProject extends Component {
  constructor(){
    super();
    this.state = {
      newProject:{}
    }
  }

  static defaultProps = {
    categories: ['Home', 'Web Development', 'Mobile Development']
  }

  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert('Destination is required');
    } else {
      this.setState({newProject:{
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function(){
        //console.log(this.state);
        this.props.addProject(this.state.newProject);
      });
    }
    e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });
    return (
      <div>
        <h3>Handy Booker</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Destination</label><br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Category</label><br />
            <select ref="category">
              {categoryOptions}
            </select>
          </div>
          <br />

              <Button variant="contained" color="primary" type="submit" value="Submit">
                Add Appointment
              </Button>

          <br />
        </form>
      </div>
    );
  }
}

export default AddProject;
