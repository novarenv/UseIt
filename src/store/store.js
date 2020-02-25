import AsyncStorage from '@react-native-community/async-storage'
import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import {persistReducer, persistStore} from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import appReducer from './reducers/app'

export const reducers = {
  app: appReducer
};

export const rootReducer = combineReducers(reducers);

/*
 *--------------------------------------------------*
 * Persist config documentation
 * https://github.com/rt2zz/redux-persist/blob/master/src/types.js#L13-L27
 *--------------------------------------------------*
 */
const persistConfig = {
  storage: AsyncStorage,
  key: 'root',
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const combinedReducers = combineReducers({
  persist: persistedReducer
});

const appMiddleware = store => next => action => {
  next(action);
};

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, appMiddleware];
const enhancers = [applyMiddleware(...middlewares)];

export const store = createStore(combinedReducers, compose(...enhancers));

// sagaMiddleware.run(sagas);

export const persistor = persistStore(store);