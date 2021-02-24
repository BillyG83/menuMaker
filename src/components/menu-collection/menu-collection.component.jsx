import React from 'react'
import MenuSection from '../menu-section/menu-section.component.jsx'
import './menu-collection.styles.scss'

const MenuCollection = ({ businessMenu }) => {
	return(
		<main className="menu">
			<ul className="menu-collection">
				{
					businessMenu.map((menuSection, i) => (
						<MenuSection 
							sectionName={menuSection.catName}
							sectionItems={menuSection.catItems}
							key={i}
						/>
					))
				}
			</ul>
		</main>
	)
}

export default MenuCollection