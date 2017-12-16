import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import { inject, observer } from 'mobx-react';
import needloadStore from './store';
import './style.css';


@inject('routing')
@inject('publicStore')
@observer
class NeedloadStoreComponent extends Component {
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
        <div className="con">
          <span>count：{needloadStore.count}</span>
        </div>
        <div className="btnCon">
          <button className="fz14" onClick={NeedloadStoreComponent.add}>+</button>
          <button className="ml10 fz14" onClick={NeedloadStoreComponent.less}>-</button>
        </div>
        <h1>下面按钮，数据变换后不触发render</h1>
        <div className="btnCon">
          <button className="fz14" onClick={NeedloadStoreComponent.needAdd}>+</button>
          <button className="ml10 fz14" onClick={NeedloadStoreComponent.needLess}>-</button>
        </div>
      </div>
    );
  }
}
// const _NeedloadStoreComponent = connect(mapStateToProps)(NeedloadStoreComponent);
export default NeedloadStoreComponent;
