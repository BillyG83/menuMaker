import React from 'react'
import { connect } from 'react-redux'

import { selectCurrentUser } from '../../redux/user/user.selectors.js'
import { signInWithGoogle } from '../../firebase/firebase.js'
import { auth } from '../../firebase/firebase.js'

import './menu.styles.scss'

const MenuPage = ({ currentUser }) => (
	<div className="menu-page">
		<h1>Your Menu</h1>
		<p>user can add, edit, remove products</p>
		<br />
		<br />
		
		{
			currentUser ?
			<button onClick={() => auth.signOut()}>Sign out</button>
			:
			<button onClick={signInWithGoogle}>Sign in with Google</button>
		}
	</div>
)

const mapStateToProps = state => ({
	currentUser: selectCurrentUser(state)
})

export default connect(mapStateToProps)(MenuPage)