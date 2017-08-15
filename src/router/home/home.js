import React, {
	Component
} from 'react'


import {
  connect
} from 'react-redux'
function mapStateToProps(state){
	return state
}
class Home extends Component{
	
	render(){
		console.log('render')
		console.log(this.props)
		return <h1>首页</h1>
	}
}
const _Home = connect(mapStateToProps)(Home)
export default _Home