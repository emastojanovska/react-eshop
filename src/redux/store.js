import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

//The logger middleware is just a function that catches the fired actions,
//console.log them out and passes them to the root reducer
const middlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;