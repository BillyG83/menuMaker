import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { selectCurrentUser } from '../../redux/user/user.selectors.js'
import { signInWithGoogle } from '../../firebase/firebase.js'
import { auth } from '../../firebase/firebase.js'

import SignIn from '../../components/sign-in/sign-in.component.jsx'

import './admin.styles.scss'

class AdminPage extends React.Component {
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
				{
					this.props.currentUser ?
					<button onClick={() => auth.signOut()}>Sign out</button>
					:
					<button onClick={signInWithGoogle}>Sign in with Google</button>
				}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	currentUser: selectCurrentUser(state)
})

export default connect(mapStateToProps)(AdminPage)