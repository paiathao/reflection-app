import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {

  onChange = (event) => {
    console.log(event.target.value);
    this.props.dispatch({
      type: 'ADD_COMMENTS',
      payload: event.target.value
    })
  }

  handleNext = () => {
    this.props.history.push('/success')
  }

  render() {
    return (
      <div>
        Is there any additional comments you'd like leave?
        <input type="text" />
      </div>
    );
  }
}

export default connect()(Comments);