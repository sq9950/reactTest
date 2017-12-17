import React from 'react';
import { Link, Route } from 'react-router-dom';
import CSSModules from 'react-css-modules';

import home from 'bundle-loader?lazy&name=nestingHome!./page/home';
import page from 'bundle-loader?lazy&name=nestingPage!./page/page';

import * as utils from '../../utils/util';
import styles from './style.css';

const NestingComponent = () => (
  <div styleName="h1">
    <div styleName="h1">nesting Index</div>
    <ul>
      <li>
        <Link href="/nestingRouter/home" to="/nestingRouter/home">1、二级Home页</Link>
      </li>
      <li>
        <Link href="/nestingRouter/page" to="/nestingRouter/page">2、二级Page页</Link>
      </li>
    </ul>
    <Route path="/nestingRouter/home" component={utils.syncBundle(home)} />
    <Route path="/nestingRouter/page" component={utils.syncBundle(page)} />
  </div>
);
export default CSSModules(NestingComponent, styles);
