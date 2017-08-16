import React, { Component } from 'react'
import {Link, Route, Redirect, Switch} from "react-router-dom";


// import Bundle from '../components/Bundle/bundle'
import {DialogLayout} from '../components/Dialog'

var Home = require("bundle-loader?lazy&name=home!./home/home.js");
// import Home from './home/home'

class App extends Component {
	render(){
		return (
			<div className='asdfas111'>
				<Route path="/" component={DialogLayout} />
				<Route path="/home" component={Home} />
			</div>
		)
	}
}

module.exports = App