import React from 'react'
import { Link } from 'react-router-dom'
import { signInWithGoogle } from '../../firebase/firebase.js'
import SignIn from '../../components/sign-in/sign-in.component.jsx'
import './admin.styles.scss'

class AdminPage extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			userName: props.currentUser.displayName,
			userEmail: props.currentUser.email
		}
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
				<br />
				<br />
				<button onClick={signInWithGoogle}>Google</button>
			</div>
		)
	}
}

export default AdminPage