import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {

  constructor(props) {
    super(props);

    this.state = {
      comments : '',
    }
  }

  onChange = (event) => {
    this.setState({
      comments : event.target.value,
    }) 
  }

  handleSubmit = () => {
    this.props.dispatch({
      type: 'ADD_COMMENTS',
      payload: this.state.comments
    })
    this.props.history.push('/success')
  }

  render() {
    return (
      <div>
        Is there any additional comments you'd like leave?
        <input type="text" onChange={this.onChange}/>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default connect()(Comments);