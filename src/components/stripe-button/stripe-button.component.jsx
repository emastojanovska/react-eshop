import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ( {price} ) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51J7655B5SPzLywNDWTGt7SQZC7GrADYOFE83iYipTsJwTNzmDD6yOjRb41213cbYBbEe79GSDxYqXVu2ytLmYMJX00kgx15nyh';

    const onToken = token => {
        console.log(token);
        alert('Payments is successful');
    }

    return(
        <StripeCheckout
         label='Pay now'
         name= 'CRWN Clothing'
         billingAddress
         shippingAddress
         image='https://svgshare.com/i/CUz.svg'
         description={`Your total is $${price}`} //in dollars
         amount={priceForStripe} //in cents
         panelLabel='Pay Now'
         token={onToken}
         stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;