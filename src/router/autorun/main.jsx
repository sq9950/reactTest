import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import { inject, observer } from 'mobx-react';
import { autorun, computed } from 'mobx';
import AutorunStore from './store';
import './style';

@inject('routing')
@inject('publicStore')
@observer
class AutorunComponent extends Component {
  static add() {
    AutorunStore.add();
  }
  static less() {
    AutorunStore.less();
  }
  static needAdd() {
    AutorunStore.needAdd();
  }
  static needLess() {
    AutorunStore.needLess();
  }
  componentWillMount() {
    // 在这里做一些自定义操作
    autorun(() => {
      console.log('autorun');
      console.log(AutorunStore.count);
    });
    // 在这里生成一些新值
    const upperCaseName = computed(() => {
      console.log('computed');
      AutorunStore.sumCount = AutorunStore.count + AutorunStore.needCount;
    });
    upperCaseName.observe();
    // const disposer = upperCaseName.observe();
  }
  render() {
    return (
      <div className="autorunCon">
        <h1>demo1：按需加载</h1>
        <div className="con">
          <span>count：{AutorunStore.count}</span>
        </div>
        <div className="btnCon">
          <button className="fz14" onClick={AutorunComponent.add}>+</button>
          <button className="ml10 fz14" onClick={AutorunComponent.less}>-</button>
        </div>
        <div className="con">
          <span>needCount：{AutorunStore.needCount}</span>
        </div>
        <div className="btnCon">
          <button className="fz14" onClick={AutorunComponent.needAdd}>+</button>
          <button className="ml10 fz14" onClick={AutorunComponent.needLess}>-</button>
        </div>
        <div className="con">
          <span>sumCount：{AutorunStore.sumCount}</span>
        </div>
      </div>
    );
  }
}
// const _Home = connect(mapStateToProps)(Home);
export default AutorunComponent;
