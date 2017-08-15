import { applyMiddleware, compose, createStore } from 'redux'
const ADD_TODO = 'ADD_TODO'
function _action(text) {
  return {
  	type: ADD_TODO,
  	text
  }
}

function _reducer(state = {}, action) {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    default:
      return state
  }
}
const store = createStore(_reducer)
export default store