import React from 'react'
import { Link } from 'react-router-dom'
import SignIn from '../../components/sign-in/sign-in.component.jsx'
import './admin.styles.scss'

class AdminPage extends React.Component {
	constructor() {
		super()

		this.state = {}
	}
	
	render () {
		return(
			<div className="admin-page">
				<h1>Admin Page</h1>
				<p>user can add, edit, remove products</p>
				<br />
				<Link to='/'>Back to menu</Link>
				<br /><br />
				<SignIn />
			</div>
		)
	}
}

export default AdminPage