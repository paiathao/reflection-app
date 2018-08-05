import React, { Component } from 'react';
import FeedBackItem from '../FeedBackItem/FeedBackItem'

class Admin extends Component {

  render() {

    return (
      <div>
        <h1>Admin</h1>

        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Feeling</th>
              <th>Comprehension</th>
              <th>Support</th>
              <th>Comments</th>
              <th>Delete</th>
            </tr>
          </thead>
            <FeedBackItem />
        </table>
      </div>
    );
  }
}

export default Admin;