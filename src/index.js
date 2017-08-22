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
import * as _router from 'react-router-dom'
import App from './router/index'

import { Provider } from 'react-redux';
// import * as _history from 'history'
import { createBrowserHistory } from 'history'

import store from './store'
// console.log('store',store)
// console.log('browserHistory',browserHistory)
// console.log('_router',_router)
console.log('createBrowserHistory',createBrowserHistory)

const history = createBrowserHistory()
console.log('history',history)
history.listen(function(location){
	console.log('listen',location)
})
render(
	<Provider store={store}>
     	<Router history={history}>
      	<Route path="/" component={App} />
      </Router>
  </Provider>,
	document.getElementById('root')
)