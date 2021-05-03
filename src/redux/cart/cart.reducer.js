import reduxConst from '../reduxConst.js'
import { newOrderItem, removeOrderItem } from '../reduxUtils.js'

const INITIAL_STATE = {
    cartItems: [],
    hidden: true,
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case reduxConst.TOGGLE_ORDER_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case reduxConst.ADD_ITEM_TO_ORDER:
            return {
                ...state,
                cartItems: newOrderItem(state.cartItems, action.payload),
            }
        case reduxConst.REMOVE_ITEM_FROM_ORDER:
            return {
                ...state,
                cartItems: removeOrderItem(state.cartItems, action.payload),
            }
        case reduxConst.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
            }
        default:
            return state
    }
}

export default cartReducer