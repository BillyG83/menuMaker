import reduxConst from '../reduxConst.js'

export const toggleOrderHidden = () => ({
    type: reduxConst.TOGGLE_ORDER_HIDDEN,
})

export const addItemToOrder = item => ({
    type: reduxConst.ADD_ITEM_TO_ORDER,
    payload: item,
})

export const removeItemFromOrder = item => ({
    type: reduxConst.REMOVE_ITEM_FROM_ORDER,
    payload: item,
})

export const clearItemFromOrder = item => ({
    type: reduxConst.CLEAR_ITEM_FROM_CART,
    payload: item,
})