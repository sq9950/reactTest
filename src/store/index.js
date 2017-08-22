import { applyMiddleware, compose, createStore } from 'redux'
const ADD_TODO = 'ADD_TODO'
export const HOME_ADD = 'HOME_ADD'
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
    case HOME_ADD:
      console.log('HOME_ADD')
      return Object.assign({}, state, {
        visibilityFilter: 1
      })
    
    default:
      return state
  }
}
const store = createStore(_reducer)
export default store