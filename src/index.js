import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedbackStorage = (state = [], action) => {
    switch (action.type) {
        case "STORE_FEEDBACK":
            return action.payload
        case "DELETE_FEEDBACK":
            return [];
        default:
            return state
    }
    return state;
}



const storeInstance = createStore(
    combineReducers({
        feedbackStorage,
        
    }),
    applyMiddleware(logger)
)


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
