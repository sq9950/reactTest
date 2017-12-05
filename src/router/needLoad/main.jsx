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
  needAdd() {
    homeStore.needAdd();
  }
  needLess() {
    homeStore.needLess();
  }
  render() {
    console.log('render触发了')
    console.log('homeStore',homeStore)
    return (
      <div>
        <h1>demo1：按需加载</h1>
        <div className='con'>
          <span>count：{homeStore.count}</span>
        </div>
        <div className='btnCon'>
          <button className="fz14" onClick={this.add}>+</button>
          <button className="ml10 fz14" onClick={this.less}>-</button>
        </div>
        <h1>下面按钮，数据变换后不触发render</h1>
        <div className='btnCon'>
          <button className="fz14" onClick={this.needAdd}>+</button>
          <button className="ml10 fz14" onClick={this.needLess}>-</button>
        </div>
      </div>
    );
  }
}
// const _Home = connect(mapStateToProps)(Home);
export default Home;
