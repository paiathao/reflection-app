import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understand extends Component {

  constructor(props) {
    super(props);

    this.state = {
      comprehension : 0,
    }
  }

  onChange = (event) => {
    this.setState({
      comprehension : event.target.value,
    }) 
  }

  handleNext = () => {
    this.props.dispatch({
      type: 'ADD_UNDERSTAND',
      payload: this.state.comprehension
    })
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