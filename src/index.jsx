import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { syncHistoryWithStore } from 'mobx-react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import App from './router/index';
import stores from './store';

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, stores.routing);

ReactDOM.render(
  <Provider {...stores}>
    <BrowserRouter history={history}>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
