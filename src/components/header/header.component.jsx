import React, { memo } from 'react'
import Nav from '../nav/nav.component.jsx'
import './header.styles.scss'

const Header = memo(({ businessName, businessSocial, businessInfo }) => {
	Header.displayName = 'Header'
	if (!businessName) throw new Error('no menu data')
	
	return(
		<header className="header">
			<h1>{ businessName }</h1>
			<Nav 
				businessSocial={businessSocial} 
				businessInfo={businessInfo} 
			/>
		</header>
	)
})

export default Header