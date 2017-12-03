import React, {
  Component
} from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Route
} from 'react-router-dom'
import App from './router/index'

// import { Provider } from 'react-redux';

// import store from './store'

// import { observer } from 'mobx-react';
// import mobx, { observable } from 'mobx';

ReactDOM.render(
  <BrowserRouter history={BrowserRouter}>
    <Route path="/" component={App}/>
  </BrowserRouter>,
  document.getElementById('root')
)