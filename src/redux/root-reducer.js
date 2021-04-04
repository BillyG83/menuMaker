import { combineReducers } from 'redux'
import userReducer from './user/user.reducer.js'
import cartReducer from './cart/cart.reducer.js'

export default combineReducers({
    cart: cartReducer,
    user: userReducer,
})