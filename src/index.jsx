import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';

import App from './router/index';
import stores from './store/createStore';
import './components/config.js';

// const browserHistory = createBrowserHistory();
// const history = syncHistoryWithStore(browserHistory, stores.routing);

ReactDOM.render(
  <Provider store={stores}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
