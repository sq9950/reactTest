import React, { Component } from 'react'
import {Link, Route} from "react-router-dom";
import {DialogLayout} from '../components/Dialog'
import Home2 from './home/home2'

class App extends Component {
	render(){
		return (
			<div className='asdfas111'>
				<Route path="/index" component={Home2} />
				<Route path="/" component={DialogLayout} />
				<Route path="/home" component={Home2} />
			</div>
		)
	}
}

module.exports = App