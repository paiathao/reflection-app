import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

class Success extends Component {

  componentDidMount() {
    console.log('Component mounted')
    this.saveComments();
  }

  saveComments = () => {
    let feedback = this.props.newFeedback
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
      <div>
        <h1>Success</h1>
        <button onClick={this.onClick}>Leave New Feedback</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newFeedback : state.newFeedback}
}

export default connect(mapStateToProps)(Success);