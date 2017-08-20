import React, {
	Component
} from 'react'


import {
  connect
} from 'react-redux'
import {DialogLayout} from '../../components/Dialog'
import {Link} from "react-router-dom";
function mapStateToProps(state){
	return state
}
class Home extends Component{
	
	render(){
		return (
			<div>
				<h1>首页</h1>
				<Link to='/home1'>首页1</Link>
				<Link to='/home2'>首页2</Link>
				<DialogLayout />
			</div>
		)
		
	}
}
const _Home = connect(mapStateToProps)(Home)
export default _Home