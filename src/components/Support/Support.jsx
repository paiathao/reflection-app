import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {

  constructor(props) {
    super(props);

    this.state = {
      support : 0,
    }
  }

  onChange = (event) => {
    this.setState({
      support : event.target.value,
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

export default connect()(Support);