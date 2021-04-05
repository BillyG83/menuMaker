import reduxConst from '../reduxConst.js'

export const toggleOrderHidden = () => ({
    type: reduxConst.TOGGLE_ORDER_HIDDEN,
})

export const addItemToOrder = item => ({
    type: reduxConst.ADD_ITEM_TO_ORDER,
    payload: item,
})