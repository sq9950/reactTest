import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';

import App from './router/index';
import store, { history } from './store';
console.log('---store',store);
console.log('---history',history);
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>asdfads</div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
