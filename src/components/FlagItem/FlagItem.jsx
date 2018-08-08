import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import FlagOutlined from '@material-ui/icons/FlagOutlined'
import FlagRounded from '@material-ui/icons/FlagRounded'
import axios from 'axios';

class FlagItem extends Component {



  render() {
    
    const feedback = this.props.feedback.flagged
    let icon;

    if (feedback === true) {
      icon = <Button variant="contained" color="secondary" 
          onClick={() => this.props.flagItem(this.props.feedback)}><FlagRounded /></Button>
    } else {
      icon = <Button onClick={() => this.props.flagItem(this.props.feedback)}><FlagOutlined /></Button>
    }

    return (
      <div>
          {icon}
      </div>
    );
  }
}

export default connect()(FlagItem);