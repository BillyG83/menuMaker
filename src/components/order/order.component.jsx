import React from 'react'
import { connect } from 'react-redux'
import './order.styles.scss'

const Order = ({ hidden }) => (
    <div id="jsOrder" className={hidden ? 'order' : 'order order--open'}>
        <h2>My Order</h2>
        <ul>
            <li>
                <p>Order Item</p>
            </li>
            <li>
                <p>Order Item</p>
            </li>
            <li>
                <p>Order Item</p>
            </li>
            <li>
                <p>Order Item</p>
            </li>
        </ul>
        <button>Translate</button>
    </div>
)

const mapStateToProps = ({ cart: { hidden } }) => ({
    hidden
})

export default connect(mapStateToProps)(Order)