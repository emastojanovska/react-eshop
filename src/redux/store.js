import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
//import thunk from 'redux-thunk'
import rootReducer from './root-reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga';

//Replacing thunk with saga

const sagaMiddleware = createSagaMiddleware();
//const middlewares = [thunk];
const middlewares = [sagaMiddleware]

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

//Persisted version of the store
export const persistor = persistStore(store);

export default {store, persistor};