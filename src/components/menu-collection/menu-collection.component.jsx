import React from 'react'
import MenuSection from '../menu-section/menu-section.component.jsx'
import './menu-collection.styles.scss'

const MenuCollection = ({ businessMenu }) => {
	return(
		<main className="menu">
			<div className="menu-collection">
				{
					businessMenu.map((menuSection, i) => (
						<MenuSection 
							sectionName={menuSection.catName}
							sectionItems={menuSection.catItems}
							key={i}
						/>
					))
				}
			</div>
		</main>
	)
}

export default MenuCollection