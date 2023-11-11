import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

import './index.css';
import App from './components/App/App';

// Ben
const pizzaPrice = (state = 0, action) => {
    if(action.type === 'ADD_PIZZA') {
        // CALCULATIONS HERE
        return state + Number(action.payload.price);
    }
    else if(action.type === 'SUBTRACT_PIZZA') {
        return state - Number(action.payload.price);
    }
    else if(action.type === 'CLEAR_CART') {
        return 0;
    }
    return state;
}

// Brock

// Andy




const reduxStore = createStore(
    combineReducers({
        // Ben
        pizzaPrice

        // Brock

        // Andy

    }),
    applyMiddleware(logger)
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={reduxStore}>
            <App />
        </Provider>
    </React.StrictMode>
);
