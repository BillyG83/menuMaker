import React from 'react'
import Nav from '../nav/nav.component.jsx'
import './header.styles.scss'

const Header = ({ businessName, businessSocial, businessInfo }) => {
	return(
		<header className="header">
			<h1>{ businessName }</h1>
			<Nav 
				businessSocial={businessSocial} 
				businessInfo={businessInfo} 
			/>
		</header>
	)
}

export default Header