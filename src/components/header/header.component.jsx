import React, { memo } from 'react'
import Nav from '../nav/nav.component.jsx'
import './header.styles.scss'

const Header = React.memo(({ businessName, businessSocial, businessInfo }) => {
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