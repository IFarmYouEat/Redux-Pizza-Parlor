import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

import './index.css';
import App from './components/App/App';

// Ben
const pizzaOrder = (state = [], action) => {
    if(action.type === 'ADD_PIZZA') {

        return [...state, action.payload];
    }
    else if(action.type === 'CLEAR_CART') {
        return [];
    }
    return state;
}

const pizzaList = (state = [], action) => {
    if(action.type === 'SET_PIZZA_LIST') {
        return action.payload;
    }
    return state;
}



// Brock

// Andy




const reduxStore = createStore(
    combineReducers({
        // Ben
        pizzaList,
        pizzaOrder

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
