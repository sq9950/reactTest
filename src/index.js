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
// import { createHistory } from 'history'

import store from './store'
console.log('store',store)
console.log('browserHistory',browserHistory)
console.log('_router',_router)
console.log('createHistory',createHistory)

// const history = createHistory()

render(
	<Provider store={store}>
     <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>,
	document.getElementById('root')
)