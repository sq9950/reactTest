import React, { Component } from 'react';

import { inject, observer } from 'mobx-react';
import homeStore from './store';
import './style.css';


@inject('routing')
@inject('publicStore')
@observer
class Home extends Component {
  static add() {
    homeStore.add();
  }
  static less() {
    homeStore.less();
  }
  static syncAdd() {
    homeStore.syncAdd();
  }
  static syncLess() {
    homeStore.syncLess();
  }
  static ajax() {
    homeStore.ajax();
  }

  render() {
    return (
      <div>
        <h1>demo1：加减</h1>
        <div className="con">
          <span>{homeStore.count}</span>
        </div>
        <div className="btnCon">
          <button className="fz14" onClick={Home.add}>+</button>
          <button className="ml10 fz14" onClick={Home.less}>-</button>
        </div>
        <h1>demo1：延时加减</h1>
        <div className="con">
          <span>{homeStore.syncCount}</span>
        </div>
        <div className="btnCon">
          <button className="fz14" onClick={Home.syncAdd}>+</button>
          <button className="ml10 fz14" onClick={Home.syncLess}>-</button>
        </div>
        <h1>demo1：fetch</h1>
        <div className="con">
          <span>{homeStore.data && homeStore.data.errmsg}</span>
        </div>
        <div className="btnCon">
          <button className="fz14" onClick={Home.ajax}>+</button>
        </div>
      </div>
    );
  }
}
// const _Home = connect(mapStateToProps)(Home);
export default Home;
