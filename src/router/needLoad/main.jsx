import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import { inject, observer } from 'mobx-react';
import CSSModules from 'react-css-modules';
import needloadStore from './store';
import styles from './style.css';

const NeedloadStoreComponent = class NeedloadStoreComponent extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: 1,
  //   };
  // }
  static add() {
    needloadStore.add();
  }
  static less() {
    needloadStore.less();
  }
  static needAdd() {
    needloadStore.needAdd();
  }
  static needLess() {
    needloadStore.needLess();
  }
  render() {
    console.log('render触发了');
    console.log('needloadStore', needloadStore);
    return (
      <div>
        <h1>demo1：按需加载</h1>
        <div styleName="con">
          <span>count：{needloadStore.count}</span>
        </div>
        <div styleName="btnCon">
          <button className="fz14" onClick={NeedloadStoreComponent.add}>+</button>
          <button className="ml10 fz14" onClick={NeedloadStoreComponent.less}>-</button>
        </div>
        <h1>下面按钮，数据变换后不触发render</h1>
        <div styleName="btnCon">
          <button className="fz14" onClick={NeedloadStoreComponent.needAdd}>+</button>
          <button className="ml10 fz14" onClick={NeedloadStoreComponent.needLess}>-</button>
        </div>
      </div>
    );
  }
};
observer(NeedloadStoreComponent);
inject('publicStore')(NeedloadStoreComponent);
inject('routing')(NeedloadStoreComponent);
export default CSSModules(NeedloadStoreComponent, styles);
