import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
// import DialogLayout from 'jimu-mobile/dist/components/dialog/DialogLayout';
// import DialogLayout from 'Components';

// import Frame from 'bundle-loader?lazy&name=main!./frame';
import Home from 'bundle-loader?lazy&name=home!./home/main';
import btnAdd from 'bundle-loader?lazy&name=btnAdd!./btnAdd/main';

import needLoad from 'bundle-loader?lazy&name=needLoad!./needLoad/main';
import autorun from 'bundle-loader?lazy&name=autorun!./autorun/main';

import test from 'bundle-loader?lazy&name=test!./test/test';

// import Bundle from '../components/Bundle/bundle.js';
import * as utils from '../utils/util';


import '../styles/babel';


const App = () => (
  <div className="content">
    {/* <DialogLayout /> */}
    {/* <Route path="/" component={utils.syncBundle(Frame)} /> */}
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route path="/home" component={utils.syncBundle(Home)} />
      <Route path="/btnAdd" component={utils.syncBundle(btnAdd)} />
      <Route path="/needLoad" component={utils.syncBundle(needLoad)} />
      <Route path="/autorun" component={utils.syncBundle(autorun)} />
      <Route path="/test" component={utils.syncBundle(test)} />
    </Switch>
  </div>
);

module.exports = App;
