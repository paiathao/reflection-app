import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from '../Select/Select'

class Feel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      feeling: 0,
    }
  }

  onChange = (event) => {
    this.setState({
      feeling: event.target.value,
    })
  }

  handleNext = () => {
    this.props.dispatch({
      type: 'ADD_FEELING',
      payload: this.state.feeling
    })
    this.props.history.push('/comprehension')
  }

  render() {
    return (
      <div>
        How are you feeling today? 
        <Select onChange={this.onChange}/>
        <button onClick={this.handleNext}>Next</button>
      </div>
    );
  }
}

export default connect()(Feel);