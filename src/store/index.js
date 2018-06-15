import { createStore, compose, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';

import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    {}, // initial state
    composeEnhancers(applyMiddleware(...middleware))
);

export default store;

sagaMiddleware.run(sagas);
