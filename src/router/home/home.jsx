import React, {
  Component,
} from 'react';
import {
  connect,
} from 'react-redux';
import { Link } from 'react-router-dom';
import {
  homeAdd,
} from './actions';
import './reducer';

function mapStateToProps(state) {
  return state;
}
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 1,
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.data,
    });
  }
  add() {
    const {
      dispatch,
    } = this.props;
    const data = this.state.data + 1;
    dispatch(homeAdd(data));
  }
  render() {
    return (
      <div>
        <h1>首页</h1>
        <br />
        <span>{this.state.data}</span>
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
const _Home = connect(mapStateToProps)(Home);
export default _Home;
