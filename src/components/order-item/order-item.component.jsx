import React from 'react'
import './order-item.styles.scss'

const OrderItem = ({name, price, quantity}) => (
    <li className="order-item">
        <h3>{name}</h3>
        <p>{price} x {quantity}</p>
    </li>
)

export default OrderItem