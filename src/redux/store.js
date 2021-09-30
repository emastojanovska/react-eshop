import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

//The logger middleware is just a function that catches the fired actions,
//console.log them out and passes them to the root reducer
const middlewares = [];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

//Persisted version of the store
export const persistor = persistStore(store);

export default {store, persistor};