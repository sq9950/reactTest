import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { inject, observer } from 'mobx-react';
import homeStore from './store';
import './style.css';


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
    return [
      (<div className='h1'>演示列表</div>),
      <ul>
        <li>
          <Link to="/btnAdd">1、简单的加减按钮</Link>
        </li>
        <li>
          <Link to="/setTimeoutAction">2、延时action</Link>
        </li>
      </ul>,
    ];
  }
}
// const _Home = connect(mapStateToProps)(Home);
export default Home;
