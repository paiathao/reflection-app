import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from '../Select/Select'

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
        <Select onChange={this.onChange}/>
        <button onClick={this.handleNext}>Next</button>
      </div>
    );
  }
}

export default connect()(Support);