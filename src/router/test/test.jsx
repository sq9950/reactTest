import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { observer } from 'mobx-react';
import CSSModules from 'react-css-modules';
import test2 from 'bundle-loader?lazy&name=test!./test2';

import * as utils from '../../utils/util';
import homeStore from './store';
import styles from './style.css';

const Test = class Test extends Component {
  static less() {
    homeStore.less();
  }
  render() {
    return (
      <div styleName="h1">
        <div styleName="h1">test</div>
        <Route path="/test/test2" component={utils.syncBundle(test2)} />
        <Link href="/test/test2" to="/test/test2">1、简单的加减按钮</Link>
      </div>
    );
  }
};
observer(Test);
export default CSSModules(Test, styles);
