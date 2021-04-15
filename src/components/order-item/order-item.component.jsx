import React from 'react'
import './order-item.styles.scss'

const OrderItem = ({ item: { name, price, quantity }}) => (
    <li className="order-item">
        <h3>{name}</h3>
        <p>{price} x {quantity}</p>

        <div>
            <button>Less</button>
            <button>More</button>
        </div>
        
        <button>remove item</button>
    </li>
)

export default OrderItem