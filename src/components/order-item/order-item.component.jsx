import React from 'react'
import './order-item.styles.scss'

const OrderItem = ({name, price, quantity}) => (
    <div className="order-item">
        <h3>{name}</h3>
        <p>{price} x {quantity}</p>
    </div>
)

export default OrderItem