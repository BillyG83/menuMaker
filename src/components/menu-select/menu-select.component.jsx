import React from 'react'
import './menu-select.styles.scss'

const MenuSelect = ({ menuSections }) => {
	return(
		<nav className="menu-select">
			{
				menuSections && menuSections.map((menuSection, i) => {
					return (
						<a 
							href={`#menu-section-${menuSection}`}
							key={i}
						>
							{menuSection}
						</a>
					)
				})
			}
		</nav>
	)
}

export default MenuSelect