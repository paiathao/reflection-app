import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

//Material-Ui import
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

class FeedBackItem extends Component {

    componentDidMount() {
        console.log('Component mounted')
        this.getAllFeeds();
    }

    getAllFeeds = () => {
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

    deleteFeed = (id) => {
        axios.delete(`/feedback/${id}`)
            .then((response) => {
                this.getAllFeeds();
            })
            .catch((err) => {
                console.log('error', err)
            })
    }

    render() {

        let feedbackArray = this.props.feedback.reverse()

        let feedBackListItemArray = feedbackArray.map((feedback, index) => {
            return (
                <TableRow key={index} className={this.props.className}>
                    <CustomTableCell>{(new Date(feedback.date)).toLocaleDateString()}</CustomTableCell>
                    <CustomTableCell>{feedback.feeling}</CustomTableCell>
                    <CustomTableCell>{feedback.understanding}</CustomTableCell>
                    <CustomTableCell>{feedback.support}</CustomTableCell>
                    <CustomTableCell>{feedback.comments}</CustomTableCell>
                    <CustomTableCell>
                        <Button variant="contained" color="secondary"
                            onClick={(e) => {
                                if (window.confirm('Are you sure you want to delete this item?'))
                                    this.deleteFeed(feedback.id)
                            }} >
                            <DeleteIcon />
                        </Button>
                    </CustomTableCell>
                </TableRow>
            )
        })

        return (
            <TableBody>
                {feedBackListItemArray}
            </TableBody>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        feedback: state.feedBackStorage
    }
}

export default connect(mapStateToProps)(FeedBackItem);