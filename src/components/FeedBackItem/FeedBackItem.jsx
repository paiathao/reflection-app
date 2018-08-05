import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

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
        .then((response) =>{
            this.getAllFeeds();
        })
        .catch((err) => {
            console.log('error', err)
        })
    }


    render() {

        let feedBackListItemArray = this.props.feedback.map((feedback, index) => {
            return (
            <tr key={index}>
                <td>{ (new Date(feedback.date)).toLocaleDateString()}</td>
                <td>{feedback.feeling}</td>
                <td>{feedback.understanding}</td>
                <td>{feedback.support}</td>
                <td>{feedback.comments}</td>
                <td>
                    <button onClick={() => this.deleteFeed(feedback.id)}>Delete</button>
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