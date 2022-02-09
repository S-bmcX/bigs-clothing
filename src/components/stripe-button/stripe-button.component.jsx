import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


//price has to be converted in order for Stripe to read it, stripe reads $50 as 50,000 ;; as it incrememnts by ($0.01 = 1)
const StripeCheckoutBtn = ({price}) => {
    const priceForStriep = price * 100;
    const publishableKey = 'pk_test_51KRKvKKeZAx8TDdw5zGLCOp6RIhNmKNMOr7V6wTfwvw9t0oC8pAmhw96JDokKVhqu8K2RNyTV5teyGuoAQ2KUOsh00ai5vFYZK';

    const onToken = token => {
        console.log(token);
        alert('payment successful');
    }

    return (
        <StripeCheckout 
            label='Pay Now!'
            name='Bigs Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`your total is $${price}`}
            amount={priceForStriep}
            panelLabel='Pay Now!'
            token={onToken}
            stripeKey={publishableKey}
            allowRememberMe

        />
    );
};

export default StripeCheckoutBtn;