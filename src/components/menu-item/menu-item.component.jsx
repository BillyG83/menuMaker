import React, { memo } from 'react'
import { connect } from 'react-redux'
import { addItemToOrder } from '../../redux/cart/cart.actions.js'
import Button from '../button/button.component.jsx'
import ShowMoreLess from '../show-more-less/show-more-less.component.jsx'
import './menu-item.styles.scss'

const MenuItem = memo(({ data, addItemToOrder }) => {
	MenuItem.displayName = 'MenuItem'
	
	return(
		<li className="menu-item">
			<h4>{data.name}</h4>
			<p>{data.detail}</p>
			<strong className="price">{data.price}</strong>
			
			<Button 
				id="add-menu-item" 
				text="Add to order"
				clickEvent={() => { addItemToOrder(data) }}
			/>

			{
				data.moreInfo && data.moreInfo.length > 0 ?
				<ShowMoreLess title="More Info" content={data.moreInfo} />
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
})

const mapDispatchToProps = dispatch => ({
	addItemToOrder: data => dispatch(addItemToOrder(data))
})

export default connect(null, mapDispatchToProps)(MenuItem)