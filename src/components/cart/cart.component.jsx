import React from 'react'
import { connect } from 'react-redux'
import { toggleOrderHidden } from '../../redux/cart/cart.actions.js'
import './cart.styles.scss'

const Cart = ({ toggleOrderHidden }) => (
    <div className="cart">
        <div onClick={toggleOrderHidden} className="cart__count">0</div>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleOrderHidden: () => dispatch(toggleOrderHidden())
})

export default connect(null, mapDispatchToProps)(Cart)