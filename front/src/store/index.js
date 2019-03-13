import { createStore, applyMiddleware, compose } from 'redux';
import { logger } from './enhancers/logger'
import thunk from 'redux-thunk';
import rootReducer from './../reducers';

const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(thunk, logger))
);

export default store;