import React from 'react'
import { connect } from 'react-redux'
import { 
    addItemToOrder,
    clearItemFromOrder,
    removeItemFromOrder, 
} from '../../redux/cart/cart.actions'
import './order-item.styles.scss'

const OrderItem = ({ item, addItem, clearItem, removeItem }) => {
    const { name, price, quantity } = item

    return(
        <li className="order-item">
            <h3>{name}</h3>
            <p>{price} x {quantity}</p>

            <div>
                <button onClick={() => removeItem(item)}>Less</button>
                <button onClick={() => addItem(item)}>More</button>
            </div>
            
            <button onClick={() => clearItem(item)}>remove item</button>
        </li>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItemToOrder(item)),
    clearItem: item => dispatch(clearItemFromOrder(item)),
    removeItem: item => dispatch(removeItemFromOrder(item)),
})

export default connect(null, mapDispatchToProps)(OrderItem)