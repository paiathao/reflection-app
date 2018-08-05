import React, { Component } from 'react';

//import from Material UI
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 100,
  },
});

class Rating extends Component {

  constructor(props) {
    super(props);

    this.state = {
      rating: 0
    }
  }

  onChangeFor = (event) => {
    //update state so input show current value on DOM
    this.setState({ 
      rating : event.target.value 
    });
    //pass value on props
    this.props.onChange(event.target.value);
  }

  render() {

    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel>Rating</InputLabel>
          <Select
            value={this.state.rating}
            onChange={this.onChangeFor}
            >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

export default withStyles(styles)(Rating);