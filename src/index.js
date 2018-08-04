import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const defaultState = {
    feeling : '',
    understanding : '',
    support : '',
    comments : '',
}

const newFeedback = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_FEELING" :
            state.feeling = action.payload
            break;
        case "ADD_UNDERSTAND":
            state.understanding = action.payload
            break;
        case "ADD_SUPPORT":
            state.support = action.payload
            break;
        case "ADD_COMMENTS":
            state.comments = action.payload
            break;
        case 'RESET':
            state = defaultState;
            break;
        default:
            return state
    }
    return state;
}

const feedbackStorage = (state = [], action) => {
    if (action.type === 'STORE_FEEDBACK') {
        console.log('feeback list', action.payload)
        return action.payload
    }
    return state
}



const storeInstance = createStore(
    combineReducers({
        feedbackStorage,
        newFeedback,
    }),
    applyMiddleware(logger)
)


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
