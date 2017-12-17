import React from 'react';
import { Link } from 'react-router-dom';

import CSSModules from 'react-css-modules';
import styles from './style.css';

const Home = () => (
  <div>
    <div styleName="h1">演示列表</div>
    <ul>
      <li>
        <Link href="/btnAdd" to="/btnAdd">1、简单的加减按钮</Link>
      </li>
      <li>
        <Link href="/needLoad" to="/needLoad">2、按需加载</Link>
      </li>
      <li>
        <Link href="/autorun" to="/autorun">3、autorun</Link>
      </li>
    </ul>
  </div>
);
export default CSSModules(Home, styles);
