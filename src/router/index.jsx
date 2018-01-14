import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
// import DialogLayout from 'jimu-mobile/dist/components/dialog/DialogLayout';
// import DialogLayout from 'Components';

import Home from 'bundle-loader?lazy&name=home!./home/main';
import btnAdd from 'bundle-loader?lazy&name=btnAdd!./btnAdd/main';

import needLoad from 'bundle-loader?lazy&name=needLoad!./needLoad/main';
import autorun from 'bundle-loader?lazy&name=autorun!./autorun/main';

import nestingRouter from 'bundle-loader?lazy&name=nestingRouter!./nestingRouter/index';
import nestingRouter2 from 'bundle-loader?lazy&name=nestingRouter2!./nestingRouter2/index';

import cssModuleSwitch from 'bundle-loader?lazy&name=cssModuleSwitch!./cssModuleSwitch/main';

import * as utils from '../utils/util';

import '../styles/babel';

const App = () => (
  <div className="content">
    {/* <DialogLayout /> */}
    <Switch>
      <Redirect exact from="/demo/" to="/demo/home" />
      <Route path="/demo/home" component={utils.syncBundle(Home)} />
      <Route path="/demo/btnAdd" component={utils.syncBundle(btnAdd)} />
      <Route path="/demo/needLoad" component={utils.syncBundle(needLoad)} />
      <Route path="/demo/autorun" component={utils.syncBundle(autorun)} />
      <Route path="/demo/nestingRouter" component={utils.syncBundle(nestingRouter)} />
      <Route path="/demo/nestingRouter2" component={utils.syncBundle(nestingRouter2)} />
      <Route path="/demo/cssModuleSwitch" component={utils.syncBundle(cssModuleSwitch)} />

    </Switch>
  </div>
);

module.exports = App;
