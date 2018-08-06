import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
import Button from '@material-ui/core/Button';

class Success extends Component {

  componentDidMount() {
    console.log('Component mounted')
    this.saveFeed();
  }

  saveFeed = () => {
    let feedback = this.props.newFeedBack
    axios.post('/feedback', feedback)
      .then((response) => {
        console.log(response.data)
      })
      .catch((err) => {
        console.log('error', err)
      });
  }

  onClick = () => {
    this.props.dispatch({
      type: 'RESET',
    })
    this.props.history.push('/feel')
  }

  render() {
    return (
      <div className="card">
        <h1 className="question">Thank You!</h1>
        <Button variant="contained" color="primary"
        onClick={this.onClick}>Leave New Feedback
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newFeedBack: state.newFeedBack
  }
}

export default connect(mapStateToProps)(Success);