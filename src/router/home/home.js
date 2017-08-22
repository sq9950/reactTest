import React, {
	Component
} from 'react'
import {
  connect
} from 'react-redux'
import {DialogLayout} from '../../components/Dialog'
import {Link} from "react-router-dom";
import {
	homeAdd
} from './actions'
function mapStateToProps(state){
	return state
}
class Home extends Component{
	componentWillReceiveProps (nextProps) {
		console.log('componentWillReceiveProps')
		console.log('nextProps',nextProps)
	}
	add(){
		const {
			dispatch
		} = this.props
		dispatch(homeAdd())
	}
	render(){
		console.log('this.props',this.props)
		return (
			<div>
				<h1>首页</h1>
				<br />
				<input defaultValue='1' />
				<br />
				<button className='fz14' onClick={this.add.bind(this)}>+</button>
				<button className='ml10 fz14'>-</button>
				<br />
				<Link to='/home1'>首页1</Link>
				<Link to='/home2'>首页2</Link>
				<DialogLayout />
			</div>
		)
		
	}
}
const _Home = connect(mapStateToProps)(Home)
export default _Home