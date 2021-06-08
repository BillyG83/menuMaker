export const newOrderItem = (currentOrder, itemToAdd) => {
    const existingOrderItem = currentOrder.find(
        orderItem => orderItem.id === itemToAdd.id
    )

    if (existingOrderItem) {
        return currentOrder.map(
            orderItem => orderItem.id === itemToAdd.id ?
                {...orderItem, quantity: orderItem.quantity +1 }
            : orderItem
        )
    }

    return [...currentOrder, { ...itemToAdd, quantity: 1 }]
}

export const removeOrderItem = (currentOrder, itemToRemove) => {
    const existingOrderItem = currentOrder.find(
        orderItem => orderItem.id === itemToRemove.id
    )

    if (existingOrderItem.quantity === 1) {
        return currentOrder.filter(item => item.id !== itemToRemove.id)
    }

    return currentOrder.map(orderItem => orderItem.id === itemToRemove.id ?
        {...orderItem, quantity: orderItem.quantity -1 }
    : orderItem)
}

export const newMenuAccount = (currentAccounts, newMenuAccount) => {
    if(currentAccounts) {
        return [...currentAccounts, { ...newMenuAccount }]
    } else {
        return [{ ...newMenuAccount }]
    }
    
}