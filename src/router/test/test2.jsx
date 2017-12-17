import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './style.css';

const Test2 = () => <div styleName="h1">test2</div>;

export default CSSModules(Test2, styles);
