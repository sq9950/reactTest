import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { observer } from 'mobx-react';
import test2 from 'bundle-loader?lazy&name=test!./test2';

import * as utils from '../../utils/util';
import homeStore from './store';
import './style';

@observer
class Home extends Component {
  static less() {
    homeStore.less();
  }
  render() {
    return (
      <div className="h1">
        <div className="h1">test</div>
        <Route path="/test/test2" component={utils.syncBundle(test2)} />
        <Link href="/test/test2" to="/test/test2">1、简单的加减按钮</Link>
      </div>
    );
  }
}
// const _Home = connect(mapStateToProps)(Home);
export default Home;
