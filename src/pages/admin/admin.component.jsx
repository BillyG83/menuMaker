import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { selectCurrentUser } from '../../redux/user/user.selectors.js'
import { signInWithGoogle } from '../../firebase/firebase.js'
import { auth } from '../../firebase/firebase.js'

import SignIn from '../../components/sign-in/sign-in.component.jsx'
import StripeCheckout from '../../components/stripe-button/stripe-button.component.jsx'

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
				<h2>Upgrade to pro version</h2>
				<p>this will give you:</p>
				<ol>
					<li>No ads on your menu</li>
					<li>Add images of your menu items</li>
					<li>Add more than one menu to your account</li>
					<li>Access to future features currently in development</li>
				</ol>
				<br />
				<strong>Test payment: 4242 4242 4242 4242 <br /> EXP: 01/22 - CVV: 123</strong>
				<br />
				<StripeCheckout price={5} />
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