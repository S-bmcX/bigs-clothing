import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE =  {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
            case CartActionTypes.ADD_ITEM:
                return {
                    ...state,
                    cartItems: addItemToCart(state.cartItems, action.payload)
                };
            case CartActionTypes.REMOVE_ITEM:
                return {
                    ...state,
                    cartItems: removeItemFromCart(state.cartItems, action.payload)
                };
            case CartActionTypes.CLEAR_ITEM_FROM_CART:
                return {
                    ...state,
                    cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id )
                };
                // using .filter() targets the identified piece of information and removes it from the returned array (example array has 1,2,3,4,5. you target 5 to be deleted, the above identifies 5 and deletes it from the array)
            default:
                return state;
    }
}

export default cartReducer