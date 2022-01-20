import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CustomBtn from '../custom-btn/custom-btn.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem}/>)
            )}
        </div>
        <CustomBtn>Go To Checkout</CustomBtn>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});
// ^^ using the select import makes sure the dropdown component does NOT re-render whenever the state changes that is un-related to the cart/cartItems (ie you can sign-in/-out and the cart data will remain)


export default connect(mapStateToProps)(CartDropdown);