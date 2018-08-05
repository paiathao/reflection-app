import React, { Component } from 'react';
import { connect } from 'react-redux';

class FeedBackItem extends Component {



    render() {

        let feedBackListItemArray = this.props.feedback.map((feedback, index) => {
            return (
            <tr key={index}>
                <td>{feedback.date}</td>
                <td>{feedback.feeling}</td>
                <td>{feedback.understanding}</td>
                <td>{feedback.support}</td>
                <td>{feedback.comments}</td>
                <td>
                    <button>Delete</button>
                </td>
            </tr>
            )
        })

        return (
            <tbody>
                {feedBackListItemArray}
            </tbody>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        feedback: state.feedBackStorage
    }
}


export default connect(mapStateToProps)(FeedBackItem);