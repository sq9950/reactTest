import React, {
	Component
} from 'react'
import {
	render
} from 'react-dom'
import {
	BrowserRouter,
	browserHistory,
	Route,
	Router
} from 'react-router-dom'
import App from './router/index'

import { Provider } from 'react-redux';

import { applyMiddleware, compose, createStore } from 'redux'

class Home extends Component {
	render(){return (<div className='asdfas111'>asdf</div>)}
}

module.exports = App

const ADD_TODO = 'ADD_TODO'
function _action(text) {
  return {
  	type: ADD_TODO,
  	text
  }
}
function _reducer(state = {a:{c:1}}, action) {
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
console.log(store)
console.log(store.getState())
render(
	<Provider store={store}>
     <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>,
	document.getElementById('root')
)