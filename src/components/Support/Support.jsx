import React, { Component } from 'react';
import { connect } from 'react-redux';
import Rating from '../Rating/Rating'
import ArrowForward from '@material-ui/icons/ArrowForwardTwoTone'
import Button from '@material-ui/core/Button';

class Support extends Component {

  constructor(props) {
    super(props);

    this.state = {
      support: 0,
    }
  }

  onChange = (rating) => {
    this.setState({
      support: rating,
    })
  }

  handleNext = () => {
    if (this.state.support > 0) {
      this.props.dispatch({
        type: 'ADD_SUPPORT',
        payload: this.state.support
      })
      this.props.history.push('/comments')
    } else {
      alert('Please select a rating!')
    }
  }

  render() {
    return (
      <div className="card">
        <h1 className="question">How well are you being supported? </h1>
        <Rating onChange={this.onChange} />
        <Button variant="contained" color="primary"
          onClick={this.handleNext}>
          Next <ArrowForward />
        </Button>
      </div>
    );
  }
}

export default connect()(Support);