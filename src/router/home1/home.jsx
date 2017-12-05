// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// import { inject, observer } from 'mobx-react';
// import homeStore from './store';
// import './style.css';


// @inject('routing')
// @inject('publicStore')
// @observer
// class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: 1,
//     };
//   }
//   add() {
//     homeStore.add();
//   }
//   less() {
//     homeStore.less();
//   }
//   render() {
//     return (
//       <div>
//         <h1>demo1：加减</h1>
//         <div className='con'>
//           <span>{homeStore.count}</span>
//         </div>
//         <div className='btnCon'>
//           <button className="fz14" onClick={this.add}>+</button>
//           <button className="ml10 fz14" onClick={this.less}>-</button>
//         </div>
//         <Link to="/home1">首页1</Link>
//         <Link to="/home2">首页2</Link>
//       </div>
//     );
//   }
// }
// // const _Home = connect(mapStateToProps)(Home);
// export default Home;
