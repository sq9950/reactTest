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

import store from './store'


render(
	<Provider store={store}>
     <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>,
	document.getElementById('root')
)