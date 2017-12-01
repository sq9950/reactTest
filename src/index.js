import React, {
	Component
} from 'react'
import ReactDOM from 'react-dom'
import {
	BrowserRouter,
	Route
} from 'react-router-dom'
import * as _router from 'react-router-dom'
import App from './router/index'

import { Provider } from 'react-redux';

import store from './store'

console.log('store',store.getState())
ReactDOM.render(
	<Provider store={store}>
     	<BrowserRouter history={BrowserRouter}>
      	<Route path="/" component={App}/>
      </BrowserRouter>
  </Provider>,
	document.getElementById('root')
)