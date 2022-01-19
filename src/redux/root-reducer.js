import {combineReducers} from 'redux';
import userReducer from "./user/user-reducer";
import cartReducer from './cart/cart-reducer';

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});

// this combines a pre-built redux function with the userReducer I built to create 1 object that has all the redux functionality intended for use
