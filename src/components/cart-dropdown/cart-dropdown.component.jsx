import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {withRouter} from 'react-router-dom'
import CustomBtn from '../custom-btn/custom-btn.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
            cartItems.length ?
            cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem}/>)
            )
            :
            <span className="empty-message">Your cart is empty</span>
            }
        </div>
        <CustomBtn onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
            }}>Go To Checkout</CustomBtn>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});
// ^^ using the select import makes sure the dropdown component does NOT re-render whenever the state changes that is un-related to the cart/cartItems (ie you can sign-in/-out and the cart data will remain)

// using connect() below automatically passes in a host of other props to be used such as Dispatch, Location, etc...
export default withRouter(connect(mapStateToProps)(CartDropdown));