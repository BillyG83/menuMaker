import React from 'react'
import { connect } from 'react-redux'
import { addItemToOrder } from '../../redux/cart/cart.actions.js'
import './menu-item.styles.scss'

const MenuItem = ({ data, addItemToOrder }) => (
	<li className="menu-item">
		<h4>{data.name}</h4>
		<p>{data.detail}</p>
		<strong className="price">{data.price}</strong>
		<button 
			onClick={() => { addItemToOrder(data) }} 
			className="button"
			>Add to order
		</button>
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

const mapDispatchToProps = dispatch => ({
	addItemToOrder: data => dispatch(addItemToOrder(data))
})

export default connect(null, mapDispatchToProps)(MenuItem)