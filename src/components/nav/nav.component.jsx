import React, { memo } from 'react'
import Button from '../button/button.component.jsx'
import './nav.styles.scss'

const Nav = memo(({ businessSocial, businessInfo }) => {
	Nav.displayName = 'Nav'

	const clickHandle = (event) => {
		console.log(event.target.id);
	}

	return(
		<nav className="nav">
			<ul>
				<li>
					<Button 
						clickEvent={clickHandle} 
						Id="nav-social"
						icon="share"
						type="button"
					/>
				</li>
				<li>
					<Button 
						clickEvent={clickHandle} 
						Id="nav-info"
						icon="info"
						type="button"
					/>
				</li>
				<li>
					<Button 
						clickEvent={clickHandle} 
						Id="nav-translate"
						icon="language"
						type="button"
					/>
				</li>
			</ul>
		</nav>
	)
})

export default Nav