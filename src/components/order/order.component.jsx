import React from 'react'
import { connect } from 'react-redux'
import OrderItem from '../order-item/order-item.component.jsx'
import './order.styles.scss'

const Order = ({ hidden, cartItems }) => (
    <div id="jsOrder" className={hidden ? 'order' : 'order order--open'}>
        <h2>My Order</h2>
        <ul>
            {
                cartItems.map(item => (
                    <OrderItem 
                        key={item.id}
                        name={item.name} 
                        price={item.price} 
                        quantity={item.quantity} 
                    />
                ))
            }
        </ul>
        <button>Translate</button>
    </div>
)

const mapStateToProps = ({ cart: { hidden, cartItems } }) => ({
    cartItems,
    hidden
})

export default connect(mapStateToProps)(Order)