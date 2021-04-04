import React from 'react'
import Header from '../../components/header/header.component.jsx'
import MenuSelect from '../../components/menu-select/menu-select.component.jsx'
import MenuCollection from '../../components/menu-collection/menu-collection.component.jsx'
import Cart from '../../components/cart/cart.component.jsx'
import Order from '../../components/order/order.component.jsx'
import './landing.styles.scss'

import mockData from '../../mockData.js'

class LandingPage extends React.Component {
	constructor() {
		super()

		// currently getting an account from a business
		// mocking a successful QR scan and app call
		this.state = mockData.accounts[0]
	}

	componentDidMount() {
		let menuSections = []
		this.state.businessMenu.forEach(menuSection => {
			menuSections.push(menuSection.catName)
		})
		this.setState(prevState => ({
			...prevState,
			'menuSections': menuSections
		}))
	}
	
	render () {
		return(
			<div className="landing-page">
				<Header 
					businessName={this.state.businessName} 
					businessSocial={this.state.businessSocial} 
					businessInfo={this.state.businessInfo}	
				/>
				<MenuSelect menuSections={this.state.menuSections} />
				<MenuCollection 
					businessMenu={this.state.businessMenu.sort((a, b) => (a.catOrder > b.catOrder) ? 1 : -1)}
				/>
				<Cart />
				<Order />
			</div>
		)
	}
}

export default LandingPage