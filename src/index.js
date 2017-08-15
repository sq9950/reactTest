import React, {
	Component
} from 'react'
import {
	render
} from 'react-dom'
import {
	BrowserRouter,
	Route,
	Router
} from 'react-router-dom'
import App from './router/index'


render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
)