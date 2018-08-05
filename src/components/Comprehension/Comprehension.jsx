import React, { Component } from 'react';
import { connect } from 'react-redux';
import Rating from '../Rating/Rating'
import ArrowForward from '@material-ui/icons/ArrowForwardTwoTone'
import Button from '@material-ui/core/Button';

class Understand extends Component {

  constructor(props) {
    super(props);

    this.state = {
      comprehension: 0,
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
      <div className="card">
        <h1 className="question">How well are you understanding the content?</h1>
        <Rating onChange={this.onChange} />
        <Button variant="contained" color="primary"
          onClick={this.handleNext}>
          Next <ArrowForward />
        </Button>
      </div>
    );
  }
}



export default connect()(Understand);