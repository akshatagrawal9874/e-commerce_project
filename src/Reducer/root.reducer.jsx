import {combineReducers } from 'redux'
import userReducer from "./user/user.reducer";
import CartReducer from "./cart-reducer/cart.reducer"
export default combineReducers({
    user:userReducer,
    cart:CartReducer
});