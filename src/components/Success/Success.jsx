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

  render() {
    return (
      <div>
        <h1>Success</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newFeedback : state.newFeedback}
}

export default connect(mapStateToProps)(Success);