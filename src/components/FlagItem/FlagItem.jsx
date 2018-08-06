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

    // if (this.props.flagged == false) {
    //   return <FlagOutlined/>
    // } else {
    //   return <FlagRounded/>
    // }

    return (
      <div>
        <Button onClick={() => this.flagItem(this.props.feedback)}>
        <FlagOutlined/>
        </Button>
      </div>
    );
  }
}

export default connect()(FlagItem);