import { createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { updateLocation } from './location';
import makeRootReducer from './reducers';

const ADD_TODO = 'ADD_TODO';
export const HOME_ADD = 'HOME_ADD';
function _action(text) {
  return {
  	type: ADD_TODO,
  	text,
  };
}
function _reducer(state = {}, action) {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        visibilityFilter: action.filter,
      });
    case HOME_ADD:
      return Object.assign({}, state, {
        visibilityFilter: 1,
      });

    default:
      return state;
  }
}
// export const history = createBrowserHistory();
const store = createStore(_reducer);
window.store = store
// store.unsubscribeHistory = history.listen(updateLocation(store));
export default store;
