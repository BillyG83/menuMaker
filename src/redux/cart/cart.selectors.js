import { createSelector } from 'reselect'

const selectCart = state => state.cart

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (sumQuantity, cartItem) => sumQuantity + cartItem.quantity 
    , 0)
)

export const selectOrderTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (sumTotal, cartItem) => sumTotal + cartItem.quantity * cartItem.price
    , 0)
)

export const selectOrderHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)