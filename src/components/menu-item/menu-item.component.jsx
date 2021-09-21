import React, { memo } from 'react'
import { connect } from 'react-redux'
import { addItemToOrder } from '../../redux/cart/cart.actions.js'
import Button from '../button/button.component.jsx'
import ShowMoreLess from '../show-more-less/show-more-less.component.jsx'
import IconList from '../icon-list/icon-list.component.jsx'
import List from '../list/list.component.jsx'
import './menu-item.styles.scss'

const MenuItem = memo(({ data, addItemToOrder }) => {
	MenuItem.displayName = 'MenuItem'
	
	return(
		<li className="menu-item">
			<h3>{data.name}</h3>
			<p>{data.detail}</p>
			<strong className="price">{data.price}</strong>
			
			<div className="menu-item__flex">
				{
					data.icons && data.icons.length > 0 ?
					<IconList icons={data.icons} />
					:
					``
				}
				<Button 
					Id="add-menu-item" 
					text="Add to order"
					clickEvent={() => { addItemToOrder(data) }}
					icon="add"
					color="green"
				/>
			</div>
			
			{
				data.ingredients && data.ingredients.length > 0 ?
				<List listItems={data.ingredients} listTitle="Ingredients" />
				:
				``
			}
			{
				data.moreInfo && data.moreInfo.length > 0 ?
				<ShowMoreLess title="More Info" content={data.moreInfo} />
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