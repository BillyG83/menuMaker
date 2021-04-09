import React from 'react'
import { connect } from 'react-redux'
import { toggleOrderHidden } from '../../redux/cart/cart.actions.js'
import { selectCartItemsCount } from './cart.selectors.js'
import './cart.styles.scss'

const Cart = ({ itemTotal, toggleOrderHidden }) => (
    <div className={itemTotal ? 'cart cart--has-items' : 'cart'}>
        <div 
            onClick={toggleOrderHidden} 
            className="cart__count"
        >
            {itemTotal}
        </div>
    </div>
)

const mapStateToProps = state => ({
    itemTotal: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
    toggleOrderHidden: () => dispatch(toggleOrderHidden())
})


export default connect(mapStateToProps, mapDispatchToProps)(Cart)