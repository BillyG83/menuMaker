import React from 'react'
import StripeCheckout from '../../components/stripe-button/stripe-button.component.jsx'
import './checkout.styles.scss'

const CheckoutPage = () => (
    <div className="checkout">
        <h1>Upgrade to pro version</h1>
        <p>this will give you:</p>
        <ol>
            <li>No ads on your menu</li>
            <li>Add images of your menu items</li>
            <li>Add more than one menu to your account</li>
            <li>Access to future features currently in development</li>
        </ol>
        <br />
        <strong>Test payment: 4242 4242 4242 4242 <br /> EXP: 01/22 - CVV: 123</strong>
        <br />
        <StripeCheckout price={5} />
        <br />
        <br />
    </div>
)

export default CheckoutPage