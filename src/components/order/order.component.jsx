import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { 
    selectCartItems, 
    selectOrderHidden,
    selectOrderTotal, 
} from '../../redux/cart/cart.selectors.js'
import { toggleOrderHidden } from '../../redux/cart/cart.actions.js'

import OrderItem from '../order-item/order-item.component.jsx'
import './order.styles.scss'

const Order = (
    { 
        cartItems, 
        hidden, 
        orderTotal,
        toggleOrderHidden, 
    }) => (
    <div className={hidden ? 'order' : 'order order--open'}>
        <h2>My Order</h2>
        {
            cartItems.length <= 0 ?
                <div>
                    <p>Oops there is nothing in your order</p>
                    <button onClick={toggleOrderHidden}>Back to the menu</button>
                </div>
            :
            <section>
                <ul>
                    {
                        cartItems && cartItems.map(item => (
                            <OrderItem 
                                key={item.id}
                                item={item} 
                            />
                        ))
                    }
                </ul>
                <h3 className="order-total">
                    €{ orderTotal }
                </h3>
            </section>
        }
        <button>Translate</button>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    hidden: selectOrderHidden,
    orderTotal: selectOrderTotal,
})

const mapDispatchToProps = dispatch => ({
    toggleOrderHidden: () => dispatch(toggleOrderHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(Order)