import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { auth, createUserProfileDocument } from './firebase/firebase.js'
import { setCurrentUser } from './redux/user/user.actions.js'

import AdminPage from './pages/admin/admin.component.jsx'
import CheckoutPage from './pages/checkout/checkout.component.jsx'
import LandingPage from './pages/landing/landing.component.jsx'
import MenuPage from './pages/menu/menu.component.jsx'

import './App.css';

class App extends React.Component {

	logOffAuth = null

	componentDidMount() {
		const { setCurrentUser } = this.props

		// onAuthStateChanged is a firebase listener to hear if the user logs in
		this.logOffAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				// userRef is returned from createUserProfileDocument()
				const userRef = await createUserProfileDocument(userAuth)

				// set the state with the user id and firestore data
				userRef.onSnapshot(snapShot => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data()
					})
				})
			}

			// this will reset the currentUser when the users signs out
			setCurrentUser(userAuth)
		})
	}

	componentWillUnmount() {
		this.logOffAuth()
	}

	render() {
		return (
			<div className="app">
				<Route 
					exact={true} 
					path='/' 
					component={LandingPage}
				/>
	
				<Route 
					exact={true} 
					path='/admin' 
					component={AdminPage}
				/>

				<Route 
					exact={true} 
					path='/checkout' 
					component={CheckoutPage}
				/>

				<Route 
					exact={true} 
					path='/menu' 
					component={MenuPage}
				/>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
