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
						<li>
							<a 
								href={i === 0 ? '#root' : `#menu-section-${menuSection}`}
								key={i}
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