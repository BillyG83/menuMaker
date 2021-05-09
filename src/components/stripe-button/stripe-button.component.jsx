import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51IpAYjJn6nfJSUxBAgHLjG3UP2IPtW4xh04Cq83OyCqItlnTvZNdUrx9Al02EufiRVhuRQ97hXlf6PTKi2cJ016b00nAlQtKNk'

    const onToken = token => {
        console.log(token);
    }

    return (
        <StripeCheckout 
            amount={priceForStripe}
            currency='EUR'
            label='pay now'
            name='my menu upgrade'
            billingAddress
            image='/img/logo.png'
            description={`Upgrade now for only ${price}`}
            panelLabel='Upgrade Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton