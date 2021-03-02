import React from 'react'
import { Route } from 'react-router-dom'
import { auth, createUserProfileDocument } from './firebase/firebase.js'
import './App.css';
import LandingPage from './pages/landing/landing.component.jsx'
import AdminPage from './pages/admin/admin.component.jsx'

class App extends React.Component {
	constructor() {
		super()

		this.state = {
			currentUser: null
		}
	}

	logOffAuth = null

	componentDidMount() {
		// onAuthStateChanged is a firebase listener to hear if the user logs in
		this.logOffAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				// userRef is returned from createUserProfileDocument()
				const userRef = await createUserProfileDocument(userAuth)

				// set the state with the user id and firestore data
				userRef.onSnapshot(snapShot => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data()
						}
					})
				})
			}

			// this will reset the currentUser when the users signs out
			this.setState({ currentUser: null })
		})
	}

	componentWillUnmount() {
		this.logOffAuth()
	}

	adminPageWithProps = (props) => {
		return (
			<AdminPage 
				currentUser={this.state.currentUser}
			/>
		);
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
					component={this.adminPageWithProps}
				/>
			</div>
		)
	}
}

export default App;
