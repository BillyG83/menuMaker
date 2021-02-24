import React from 'react'
import MenuItem from '../menu-item/menu-item.component.jsx'
import './menu-section.styles.scss'

const MenuSection = ({ sectionName, sectionItems }) => {
	return(
		<section id={'menu-section-' + sectionName} className="menu-section">
			<h3>{sectionName}</h3>

			<ul className="menu-section__list">
				{
					sectionItems
						.filter(menuItem => menuItem.isActive)
						.map((menuItem, i) => (
							<MenuItem 
								data={menuItem} 
								key={i}
							/>
						)
					)
				}
			</ul>
		</section>
	)
}

export default MenuSection