import React, { memo } from 'react'
import './menu-select.styles.scss'

const MenuSelect = memo(({ menuSections }) => {
	MenuSelect.displayName = 'MenuSelect'

	return(
		<nav className="menu-select">
			<ul>
			{
				menuSections && menuSections.map((menuSection, i) => {
					return (
						<li key={`menu-select-${i}`}>
							<a 
								href={i === 0 ? '#root' : `#menu-section-${menuSection}`}
							>
								{menuSection}
							</a>
						</li>
					)
				})
			}
			</ul>
		</nav>
	)
})

export default MenuSelect