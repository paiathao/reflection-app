import React from 'react';
import FeedBackItem from '../FeedBackItem/FeedBackItem'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '90%',
    marginLeft: theme.spacing.unit * 8,
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});


function Admin(props) {

  const { classes } = props;

  return (

    <div>
      <h1>Admin</h1>

      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>Date</CustomTableCell>
              <CustomTableCell>Feeling</CustomTableCell>
              <CustomTableCell>Comprehension</CustomTableCell>
              <CustomTableCell>Support</CustomTableCell>
              <CustomTableCell>Comments</CustomTableCell>
              <CustomTableCell>Delete</CustomTableCell>
              <CustomTableCell>Flag</CustomTableCell>
            </TableRow>
          </TableHead>
          <FeedBackItem className={classes.row} />
        </Table>
      </Paper>
    </div>
  );
}


export default withStyles(styles)(Admin);