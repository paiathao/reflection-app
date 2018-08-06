import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import FlagOutlined from '@material-ui/icons/FlagOutlined'
import FlagRounded from '@material-ui/icons/FlagRounded'

class FlagItem extends Component {

  flagItem = (feedback) => {
    console.log('flag', feedback)
  }





render() {

  const feedback = this.props.feedback.toString();
  let icon;

    if (feedback == 'true') {
      icon = <FlagRounded/>
    } else {
      icon = <FlagOutlined/>
    }
  
  return (
    <div>
      <Button onClick={() => this.flagItem(this.props.feedback)}>
        {icon}
      </Button>
    </div>
  );
}
}

export default connect()(FlagItem);