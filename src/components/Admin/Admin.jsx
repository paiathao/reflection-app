import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Admin extends Component {

  componentDidMount() {
    console.log('Component mounted')
    axios.get('/feedback')
        .then((response) => {
            console.log(response.data)
            this.props.dispatch({
                type: 'STORE_FEEDBACK',
                payload: response.data
            })
        })
        .catch((err) => {
            console.log('error', err)
        });
}

  render() {
    return (
      <div>
        <h1>Admin</h1>

        <table>
          <thead>
            <tr>
              <td>Date</td>
              <td>Feeling</td>
              <td>Comprehension</td>
              <td>Support</td>
              <td>Comments</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
        {JSON.stringify(this.props.feedback)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      feedback : state.feedbackStorage}
}


export default connect(mapStateToProps)(Admin);