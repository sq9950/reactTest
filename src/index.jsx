import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'connected-react-router';
// import { Route } from 'react-router-dom';

import App from './router/index';
// import store, { history } from './store';

// const browserHistory = createBrowserHistory();
// const history = syncHistoryWithStore(browserHistory, stores.routing);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
