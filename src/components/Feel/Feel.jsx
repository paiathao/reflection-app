import React, { Component } from 'react';
import { connect } from 'react-redux';
import Rating from '../Rating/Rating'
import ArrowForward from '@material-ui/icons/ArrowForwardTwoTone'
import Button from '@material-ui/core/Button';

class Feel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      feeling: 0,
    }
  }

  onChange = (rating) => {
    this.setState({
      feeling: rating,
    })
  }

  handleNext = () => {
    if (this.state.feeling > 0) {
      this.props.dispatch({
        type: 'ADD_FEELING',
        payload: this.state.feeling
      })
      this.props.history.push('/comprehension')
    } else {
      alert('Please select a rating!')
    }
  }

  render() {
    return (
      <div className="card">
        <h1 className="question">How are you feeling today?</h1>
        <Rating onChange={this.onChange} />
        <Button variant="contained" color="primary" className="nextButton"
          onClick={this.handleNext}>
          Next <ArrowForward />
        </Button>
      </div>
    );
  }
}

export default connect()(Feel);