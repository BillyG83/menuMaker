import React from 'react'
import './menu-item.styles.scss'

const MenuItem = ({ data }) => {
	return(
		<li className="menu-item">
			<h4>{data.name}</h4>
			<p>{data.detail}</p>
			<strong className="price">{data.price}</strong>
			{
				data.moreInfo && data.moreInfo.length > 0 ?
				<p>More Info (content component)</p>
				:
				``
			}
			{
				data.icons && data.icons.length > 0 ?
				<p>Icon Component</p>
				:
				``
			}
			{
				data.ingredients && data.ingredients.length > 0 ?
				<p>Ingredients (content component)</p>
				:
				``
			}
		</li>
	)
}

export default MenuItem