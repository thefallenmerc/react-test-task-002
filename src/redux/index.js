import rootReducer from './reducers';
import { createStore, compose, applyMiddleware } from "redux"
import logger from 'redux-logger';

let composeEnhancers;
const middlewares = [];

if(process.env.NODE_ENV === 'development') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    middlewares.push(logger);
} else {
    composeEnhancers = compose;
}


const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(...middlewares)));

export default store;