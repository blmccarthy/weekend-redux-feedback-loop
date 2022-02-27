import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { logger } from 'redux-logger';


import './index.css';
import App from './components/00-App/App';

const feedback = (state = {
    feeling: '',
    understanding: '',
    support: '',
    comments: '',
    // flagged: '',
    // date: '',
}, action) => {
    if (action.type === 'SET_FEELING') {
        console.log('payload', action.payload);

        const {feeling} = action.payload;

        return {
            ...state,
            feeling: feeling
        }
    }
    else if (action.type === 'SET_UNDERSTANDING') {
        console.log('payload', action.payload);

        const {understanding} = action.payload;

        return {
            ...state,
            understanding: understanding
        }
    }
    else if (action.type === 'SET_SUPPORT') {
        console.log('payload', action.payload);

        const {support} = action.payload;

        return {
            ...state,
            support: support
        }
    }
    else if (action.type === 'SET_COMMENTS') {
        console.log('payload', action.payload);

        const {comments} = action.payload;

        return {
            ...state,
            comments: comments
        }
    }
    else if (action.type === 'RESET') {
        return {
            feeling: '',
            understanding: '',
            support: '',
            comments: '', 
        }
    }

    return state;
}

const storeData = createStore(
    combineReducers({
        feedback,
    }),
    applyMiddleware(logger)
)

ReactDOM.render(
    <Provider store={storeData}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();