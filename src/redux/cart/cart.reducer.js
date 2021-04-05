import reduxConst from '../reduxConst.js'
import { newOrderItem } from '../reduxUtils.js'

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
        default:
            return state
    }
}

export default cartReducer