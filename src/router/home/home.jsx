import React, {
  Component,
} from 'react';
import { Link } from 'react-router-dom';

import { observer } from 'mobx-react';
import mobx, { observable } from 'mobx';
// 通过 observable 定义组件的状态
const user = mobx.observable({
  count: 1,
});
const add = mobx.action(count => {
  window.setTimeout(function(){
    user.count = count
  },2000)
  
});

@observer
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 1,
    };
  }
  add() {
    add(user.count + 1);
  }
  render() {
    console.log('render', user);
    return (
      <div>
        <h1>首页</h1>
        <br />
        <span>{user.count}</span>
        <br />
        <button className="fz14" onClick={this.add.bind(this)}>+</button>
        <button className="ml10 fz14">-</button>
        <br />
        <Link to="/home1">首页1</Link>
        <Link to="/home2">首页2</Link>
      </div>
    );
  }
}
// const _Home = connect(mapStateToProps)(Home);
export default Home;
