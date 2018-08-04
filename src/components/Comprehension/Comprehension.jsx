import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understand extends Component {

  onChange = (event) => {
    console.log(event.target.value);
    this.props.dispatch({
      type: 'ADD_UNDERSTAND',
      payload: event.target.value
    })
  }

  handleNext = () => {
    this.props.history.push('/support')
  }

  render() {
    return (
      <div>
        How well are you understanding today's material?
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

export default connect()(Understand);