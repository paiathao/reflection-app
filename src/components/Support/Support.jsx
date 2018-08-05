import React, { Component } from 'react';
import { connect } from 'react-redux';
import Rating from '../Rating/Rating'

class Support extends Component {

  constructor(props) {
    super(props);

    this.state = {
      support : 0,
    }
  }

  onChange = (rating) => {
    this.setState({
      support: rating,
    })
  }

  handleNext = () => {
    this.props.dispatch({
      type: 'ADD_SUPPORT',
      payload: this.state.support
    })
    this.props.history.push('/comments')
  }

  render() {
    return (
      <div>
        How well are you being supported? 
        <Rating onChange={this.onChange}/>
        <button onClick={this.handleNext}>Next</button>
      </div>
    );
  }
}

export default connect()(Support);