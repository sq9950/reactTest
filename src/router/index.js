import React, { Component } from 'react'
import {Link, Route} from "react-router-dom";
import Home from './home/home'
import Home2 from './home/home2'

class App extends Component {
	render(){
		return (
			<div className='asdfas111'>
				<Link to='/home'>asf</Link>
				<Route path="/" component={Home} />
				<Route path="/home" component={Home2} />
			</div>
		)
	}
}

module.exports = App