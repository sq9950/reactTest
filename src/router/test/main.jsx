import React, { Component } from 'react';
import { Link, Route, Redirect, Switch } from 'react-router-dom';

import { inject, observer } from 'mobx-react';
import * as utils from '../../utils/util';
import homeStore from './store';
import './style.css';


import test2 from 'bundle-loader?lazy&name=test!./test2';

@inject('routing')
@inject('publicStore')
@observer
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 1,
    };
  }
  add() {
    homeStore.add();
  }
  less() {
    homeStore.less();
  }
  render() {
    return <div className='h1'>
      <div className='h1'>test</div>
      <Link to="/test/test2">1、简单的加减按钮</Link>
    </div>;
  }
}
// const _Home = connect(mapStateToProps)(Home);
export default Home;
