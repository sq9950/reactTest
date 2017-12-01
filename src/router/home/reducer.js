import actions from './actions';
import { handleActions } from 'redux-actions';

function reducer(state, aciton) {
  console.log('state,actions', state, aciton);
  return {
    ...state,
    data: aciton.data,
  };
}
window.store.replaceReducer(reducer);
