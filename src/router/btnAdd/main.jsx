import React, { Component } from 'react';

import { inject, observer } from 'mobx-react';
import CSSModules from 'react-css-modules';
import btnaddStore from './store';

import styles from './style.css';

const BtnaddComponent = class BtnaddComponent extends Component {
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
    // btnaddStore.ajax();
  }

  render() {
    return (
      <div>
        <h1>demo1：加减</h1>
        <div styleName="con">
          <span>{btnaddStore.count}</span>
        </div>
        <div styleName="btnCon">
          <button className="fz14" onClick={BtnaddComponent.add}>+</button>
          <button className="ml10 fz14" onClick={BtnaddComponent.less}>-</button>
        </div>
        <h1>demo1：延时加减</h1>
        <div styleName="con">
          <span>{btnaddStore.syncCount}</span>
        </div>
        <div styleName="btnCon">
          <button className="fz14" onClick={BtnaddComponent.syncAdd}>+</button>
          <button className="ml10 fz14" onClick={BtnaddComponent.syncLess}>-</button>
        </div>
        <h1>demo1：fetch(请移步webapp观看)</h1>
        <div styleName="con">
          <span>{btnaddStore.data && btnaddStore.data.errmsg}</span>
        </div>
        <div styleName="btnCon">
          <button className="fz14" onClick={BtnaddComponent.ajax}>+</button>
        </div>
      </div>
    );
  }
};
observer(BtnaddComponent);
inject('publicStore')(BtnaddComponent);
inject('routing')(BtnaddComponent);
export default CSSModules(BtnaddComponent, styles);
