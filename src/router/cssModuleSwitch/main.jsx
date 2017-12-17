import React, { Component } from 'react';

import CSSModules from 'react-css-modules';
import styles from './style.css';

const cssModuleSwitch = class cssModuleSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      divClass: 'red',
    };
    this.btnClick = this.btnClick.bind(this);
  }
  btnClick() {
    const {
      divClass,
    } = this.state;
    if (divClass === 'red') {
      this.setState({
        divClass: 'yellow',
      });
    } else {
      this.setState({
        divClass: 'red',
      });
    }
  }
  render() {
    return (
      <div>
        <div styleName={this.state.divClass}>变换的div</div>
        <button onClick={this.btnClick}>变换颜色</button>
      </div>
    );
  }
};
export default CSSModules(cssModuleSwitch, styles);
