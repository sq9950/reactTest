import React, { Component } from 'react';
import { Link, Route, Redirect, Switch } from 'react-router-dom';
// import DialogLayout from 'jimu-mobile/dist/components/dialog/DialogLayout';
// import {DialogLayout} from 'Components';

import { connect } from 'react-redux';

import Bundle from '../components/Bundle/bundle.js';
import * as utils from '../utils/util';
import Frame from 'bundle-loader?lazy&name=main!./frame';
import Home from 'bundle-loader?lazy&name=home!./home/main';
import btnAdd from 'bundle-loader?lazy&name=btnAdd!./btnAdd/main';

import needLoad from 'bundle-loader?lazy&name=needLoad!./needLoad/main';
import autorun from 'bundle-loader?lazy&name=autorun!./autorun/main';

import test from 'bundle-loader?lazy&name=test!./test/main';
import test2 from 'bundle-loader?lazy&name=test!./test/test2';


import '../styles/babel.css';

function mapStateToProps(state, b, c) {

  return { a: 1 };
}

class App extends Component {
  render() {
    return (
      <div className="content">
        {/*<DialogLayout />*/}
        <Route path="/" component={utils.syncBundle(Frame)} />
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={utils.syncBundle(Home)} />
          <Route path="/btnAdd" component={utils.syncBundle(btnAdd)} />
          <Route path="/needLoad" component={utils.syncBundle(needLoad)} />
          <Route path="/autorun" component={utils.syncBundle(autorun)} />
          <Route path="/test/test2" component={utils.syncBundle(test2)} />
          <Route path="/test" component={utils.syncBundle(test)} />
        </Switch>
      </div>
    );
  }
}

// export default App = connect(mapStateToProps, null)(App);
module.exports = App;
