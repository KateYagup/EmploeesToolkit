import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './users/users.reducer';
import { configureStore } from '@reduxjs/toolkit';


// const reducer = combineReducers({
//     users: usersReducer,
// });

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = configureStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const store = configureStore({
    users: usersReducer,
})

export default store;

