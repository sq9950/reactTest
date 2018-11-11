import {
  createStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import resetEnhancer from './reset';
const history = createBrowserHistory();
const reducer = combineReducers({
});

const middlewares = [routerMiddleware(history), thunk];

const win = window;
const storeEnhancers = compose(
  resetEnhancer,
  applyMiddleware(...middlewares),
  (win && win.devToolsExtension) ? win.devToolsExtension() : f => f,
);

const initialState = {};

// console.log('in init store.js')
const store = createStore(connectRouter(history)(reducer), initialState, storeEnhancers);
export default store;

export { history };
