import React from 'react';

import CSSModules from 'react-css-modules';
import styles from '../style.css';

const Page = () => <div styleName="h1">Page</div>;

export default CSSModules(Page, styles);
