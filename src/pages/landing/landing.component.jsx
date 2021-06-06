import React, { useState, useEffect } from 'react'
import Header from '../../components/header/header.component.jsx'
import MenuSelect from '../../components/menu-select/menu-select.component.jsx'
import MenuCollection from '../../components/menu-collection/menu-collection.component.jsx'
import Cart from '../../components/cart/cart.component.jsx'
import Order from '../../components/order/order.component.jsx'
import ErrorBoundary from '../../components/error-boundary/error-boundary.component.jsx'
import './landing.styles.scss'

import mockData from '../../mockData.js'

const LandingPage = () => {
	const [menuData, setMenuData] = useState(mockData.accounts[0])

	useEffect(() => {
		let menuSections = []
		menuData?.businessMenu?.forEach(menuSection => {
			menuSections.push(menuSection.catName)
		})
		setMenuData(prevState => ({
			...prevState,
			'menuSections': menuSections
		}))
		document.body.classList.add(menuData?.businessCurrency)
	}, [])
	
	return(
		<div className="landing-page">
			<ErrorBoundary>
				<Header 
					businessName={menuData?.businessName} 
					businessSocial={menuData?.businessSocial} 
					businessInfo={menuData?.businessInfo}	
				/>
				<MenuSelect menuSections={menuData?.menuSections} />
				<MenuCollection 
					businessMenu={menuData?.businessMenu?.sort((a, b) => (a.catOrder > b.catOrder) ? 1 : -1)}
				/>
				<Cart />
				<Order />
			</ErrorBoundary>
		</div>
	)
}

export default LandingPage