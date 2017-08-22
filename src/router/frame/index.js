import React, {
	Component
} from 'react'


import {
  connect
} from 'react-redux'
import {DialogLayout} from '../../components/Dialog'
import {Link} from "react-router-dom";
class Home extends Component{
	
	render(){
		return (
			<div>
				<DialogLayout />
			</div>
		)
		
	}
}
export default Home