import React, { Component } from 'react';

import { inject, observer } from 'mobx-react';
import btnaddStore from './store';
import './style.css';


@inject('routing')
@inject('publicStore')
@observer
class BtnaddComponent extends Component {
  static add() {
    btnaddStore.add();
  }
  static less() {
    btnaddStore.less();
  }
  static syncAdd() {
    btnaddStore.syncAdd();
  }
  static syncLess() {
    btnaddStore.syncLess();
  }
  static ajax() {
    btnaddStore.ajax();
  }

  render() {
    return (
      <div>
        <h1>demo1：加减</h1>
        <div className="con">
          <span>{btnaddStore.count}</span>
        </div>
        <div className="btnCon">
          <button className="fz14" onClick={BtnaddComponent.add}>+</button>
          <button className="ml10 fz14" onClick={BtnaddComponent.less}>-</button>
        </div>
        <h1>demo1：延时加减</h1>
        <div className="con">
          <span>{btnaddStore.syncCount}</span>
        </div>
        <div className="btnCon">
          <button className="fz14" onClick={BtnaddComponent.syncAdd}>+</button>
          <button className="ml10 fz14" onClick={BtnaddComponent.syncLess}>-</button>
        </div>
        <h1>demo1：fetch</h1>
        <div className="con">
          <span>{btnaddStore.data && btnaddStore.data.errmsg}</span>
        </div>
        <div className="btnCon">
          <button className="fz14" onClick={BtnaddComponent.ajax}>+</button>
        </div>
      </div>
    );
  }
}
// const _BtnaddComponent = connect(mapStateToProps)(BtnaddComponent);
export default BtnaddComponent;
