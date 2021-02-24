import React from 'react'
import './menu-select.styles.scss'

const MenuSelect = ({ menuSections }) => {
	return(
		<section className="menu-select">
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
		</section>
	)
}

export default MenuSelect