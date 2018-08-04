import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {

  onChange = (event) => {
    console.log(event.target.value);
    this.props.dispatch({
      type: 'ADD_SUPPORT',
      payload: event.target.value
    })
  }

  handleNext = () => {
    this.props.history.push('/comment')
  }

  render() {
    return (
      <div>
        How well are you being supported? 
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

export default connect()(Support);