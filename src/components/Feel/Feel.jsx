import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feel extends Component {
  
  onChange = (event) => {
    console.log(event.target.value);
    this.props.dispatch({
      type: 'ADD_FEELING',
      payload: event.target.value
    })
  }

  handleNext = () => {
    this.props.history.push('/comprehension')
  }

  render() {
    return (
      <div>
        How are you feeling today?
        <select onChange={this.onChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button onClick={this.handleNext}>Next</button>
      </div>
    );
  }
}

export default connect()(Feel);