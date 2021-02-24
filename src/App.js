import React from 'react'
import { Route } from 'react-router-dom'
import { auth } from './firebase/firebase.js'
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
		this.logOffAuth = auth.onAuthStateChanged(user => {
			this.setState({ currentUser: user })
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
