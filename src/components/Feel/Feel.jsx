import React, { Component } from 'react';

class Feel extends Component {
  render() {
    return (
      <div>
        How are you feeling today?
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    );
  }
}

export default Feel;