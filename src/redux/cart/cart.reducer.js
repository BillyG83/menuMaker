import reduxConst from '../reduxConst.js'

const INITIAL_STATE = {
    hidden: true,
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case reduxConst.TOGGLE_ORDER_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state
    }
}

export default cartReducer