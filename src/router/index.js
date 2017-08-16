import React, { Component } from 'react'
import {Link, Route, Redirect, Switch} from "react-router-dom";


// import Bundle from '../components/Bundle/bundle'
import {DialogLayout} from '../components/Dialog'
import Bundle from './bundle.js';
// var Home = require("bundle-loader?lazy&name=home!./home/home.js");
import Home from 'bundle-loader?lazy&name=home!./home/home.js';
const List = () => (
    <Bundle load={Home}>
        {(List) => <List />}
    </Bundle>
)
// import Home from './home/home'

class App extends Component {
	render(){
		return (
			<div className='asdfas111'>
				<Route path="/" component={DialogLayout} />
				<Route path="/home" component={List} />
			</div>
		)
	}
}

module.exports = App