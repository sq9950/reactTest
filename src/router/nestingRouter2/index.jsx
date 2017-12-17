import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import home from 'bundle-loader?lazy&name=nestingHome!./page/home';
import page from 'bundle-loader?lazy&name=nestingPage!./page/page';

import * as utils from 'Util/util';

const NestingComponent = () => (
  <Switch>
    <Redirect exact from="/nestingRouter2" to="/nestingRouter2/home" />
    <Route path="/nestingRouter2/home" component={utils.syncBundle(home)} />
    <Route path="/nestingRouter2/page" component={utils.syncBundle(page)} />
  </Switch>
);
export default NestingComponent;
