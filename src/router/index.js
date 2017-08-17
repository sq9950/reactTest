import React, { Component } from 'react'
import {Link, Route, Redirect, Switch} from "react-router-dom";

import {DialogLayout} from '../components/Dialog'
import Bundle from '../components/Bundle/bundle.js'
import * as utils from '../utils/util'
import Home from 'bundle-loader?lazy&name=home!./home/home.js';

class App extends Component {
	render(){
		return (
			<div className='asdfas111'>
				<Route path="/" component={DialogLayout} />
				<Route path="/home" component={utils.syncBundle(Home)} />
			</div>
		)
	}
}

module.exports = App