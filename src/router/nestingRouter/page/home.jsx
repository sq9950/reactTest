import React from 'react';
import CSSModules from 'react-css-modules';

import styles from '../style.css';

const Home = () => (
  <div styleName="h1">
    <div styleName="h1">home</div>
  </div>
);
export default CSSModules(Home, styles);
