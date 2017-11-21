import React, {
  Component,
} from 'react';


import {
  connect,
} from 'react-redux';

function mapStateToProps(state) {
  return state;
}
let Home = class Home extends Component {
  render() {
    return <h1>首页2</h1>;
  }
};
Home = connect(mapStateToProps)(Home);
export default Home;
