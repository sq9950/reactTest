import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { inject, observer } from 'mobx-react';
import { autorun, computed } from 'mobx';
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
    // 在这里做一些自定义操作
    autorun(() => {
      console.log('autorun')
      console.log(homeStore.count)
    });
    // 在这里生成一些新值
    var upperCaseName = computed(() =>{
      console.log('computed')
      homeStore.sumCount = homeStore.count + homeStore.needCount;
    });
    var disposer = upperCaseName.observe();

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
        <div className='con'>
          <span>needCount：{homeStore.needCount}</span>
        </div>
        <div className='btnCon'>
          <button className="fz14" onClick={this.needAdd}>+</button>
          <button className="ml10 fz14" onClick={this.needLess}>-</button>
        </div>
        <div className='con'>
          <span>sumCount：{homeStore.sumCount}</span>
        </div>
      </div>
    );
  }
}
// const _Home = connect(mapStateToProps)(Home);
export default Home;
