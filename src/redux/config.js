import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import cominedReducers from './redusers';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
    const middleware = [
        sagaMiddleware,
    ]
    
    const store = createStore(cominedReducers, compose(applyMiddleware(...middleware)));
    sagaMiddleware.run(rootSaga, store.dispatch);
    return store;
};



