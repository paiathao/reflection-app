import React, { Component } from 'react';
import { connect } from 'react-redux';
import Rating from '../Rating/Rating'

class Understand extends Component {

  constructor(props) {
    super(props);

    this.state = {
      comprehension : 0,
    }
  }

  onChange = (rating) => {
    this.setState({
      comprehension: rating,
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
        How well are you understanding the content? 
        <Rating onChange={this.onChange}/>
        <button onClick={this.handleNext}>Next</button>
      </div>
    );
  }
}

export default connect()(Understand);