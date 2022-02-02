import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// ^^ this tells redux-persist to use local storage as default storage
import userReducer from "./user/user-reducer";
import cartReducer from './cart/cart-reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});
// this combines a pre-built redux function with the userReducer I built to create 1 object that has all the redux functionality intended for use

export default persistReducer(persistConfig, rootReducer);