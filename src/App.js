import React from 'react'
import { Route } from 'react-router-dom'
import './App.css';
import LandingPage from './pages/landing/landing.component.jsx'
import AdminPage from './pages/admin/admin.component.jsx'

function App() {
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
		</div>
	)
}

export default App;
