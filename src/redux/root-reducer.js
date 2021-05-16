import { combineReducers } from 'redux'
import accountsReducer from './accounts/accounts.reducer'
import cartReducer from './cart/cart.reducer.js'
import userReducer from './user/user.reducer.js'

export default combineReducers({
    cart: cartReducer,
    menus: accountsReducer,
    user: userReducer,
})