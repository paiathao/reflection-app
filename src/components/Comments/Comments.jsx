import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import DoneAllOutlined from '@material-ui/icons/DoneAllOutlined'

class Comments extends Component {

  constructor(props) {
    super(props);

    this.state = {
      comments: '',
    }
  }

  onChange = (event) => {
    this.setState({
      comments: event.target.value,
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
      <div className="card">
        <h1 className="question">Any comments you want to leave?</h1>
        <input type="text" onChange={this.onChange} />
        <p>
          <Button variant="contained" color="primary"
            onClick={this.handleSubmit}>
            <DoneAllOutlined />
          </Button>
        </p>
      </div>
    );
  }
}

export default connect()(Comments);