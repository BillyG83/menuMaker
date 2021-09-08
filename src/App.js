import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { auth, createUserProfileDocument } from './firebase/firebase.js'
import { setCurrentUser } from './redux/user/user.actions.js'

const AdminPage = React.lazy(() => import('./pages/admin/admin.component.jsx'))
const CheckoutPage = React.lazy(() => import('./pages/checkout/checkout.component.jsx'))
const LandingPage = React.lazy(() => import('./pages/landing/landing.component.jsx'))
const MenuPage = React.lazy(() => import('./pages/menu/menu.component.jsx'))
const HomePage = React.lazy(() => import('./pages/home/home.component.jsx'))

export const ThemeContext = React.createContext('light');

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
			<ThemeContext.Provider value='dark'>
				<React.StrictMode>
					<div className="app">
						<React.Suspense fallback={<p>Loading...</p>}>
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
								path='/home' 
								component={HomePage}
							/>

							<Route 
								exact={true} 
								path='/menu' 
								component={MenuPage}
							/>

							<Route 
								exact={true} 
								path='/checkout' 
								component={CheckoutPage}
							/>
						</React.Suspense>
					</div>
				</React.StrictMode>
			</ThemeContext.Provider>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
