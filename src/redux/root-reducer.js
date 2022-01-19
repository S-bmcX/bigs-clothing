import {combineReducers} from 'redux';
import userReducer from "./user/user-reducer";

export default combineReducers({
    user: userReducer
});

// this combines a pre-built redux function with the userReducer I built to create 1 object that has all the redux functionality intended for use
