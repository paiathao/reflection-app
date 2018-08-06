import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const currentFeedback = {
    feeling: '',
    understanding: '',
    support: '',
    comments: '',
}

const newFeedBack = (state = currentFeedback, action) => {
    switch (action.type) {
        case "ADD_FEELING":
            return {
                ...state,
                feeling: action.payload
            }
        case "ADD_UNDERSTAND":
            return {
                ...state,
                understanding: action.payload
            }
        case "ADD_SUPPORT":
            return {
                ...state,
                support: action.payload
            }
        case "ADD_COMMENTS":
            return {
                ...state,
                comments: action.payload
            }
        case 'RESET':
            return state = {
                feeling: '',
                understanding: '',
                support: '',
                comments: '',
            }
        default:
            return state;
    }
}

//List of all feedbacks
const feedBackStorage = (state = [], action) => {
    if (action.type === 'STORE_FEEDBACK') {
        return action.payload
    }
    return state
}


// Reducers
const storeInstance = createStore(
    combineReducers({
        feedBackStorage,
        newFeedBack,
    }),
    applyMiddleware(logger)
)


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();