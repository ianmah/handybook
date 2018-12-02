import React, { Component } from 'react';
import uuid from 'uuid';

class AddHandy extends Component {
  constructor(){
    super();
    this.state = {
      newProject:{}
    }
  }

  static defaultProps = {
    categories: ['Home', 'ASD', 'House']
  }

  handleSubmit(e){
    if(this.refs.to.value === ''){
      alert('Title is required');
    } else {
      this.setState({newProject:{
        id: uuid.v4(),
        to: this.refs.to.value,
        from: this.refs.from.value
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
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br />
            <input type="text" ref="to" />
          </div>
          <div>
            <label>Category</label><br />
            <select ref="from">
              {categoryOptions}
            </select>
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
