import React from 'react'
import { connect } from 'react-redux'

import { selectCurrentUser } from '../../redux/user/user.selectors.js'
import { signInWithGoogle } from '../../firebase/firebase.js'

import SignedInUserAdmin from '../../components/admin-logged-in/admin-logged-in.component.jsx'

import './admin.styles.scss'

const AdminPage = ({currentUser}) => (
	<section className="admin-page">
		<h1>My Account</h1>
		{
			currentUser ?
			<SignedInUserAdmin />
			:
			<button onClick={signInWithGoogle}>Sign in with Google</button>
		}		
	</section>
)

const mapStateToProps = state => ({
	currentUser: selectCurrentUser(state)
})

export default connect(mapStateToProps)(AdminPage)