export const newOrderItem = (currentOrder, itemToAdd) => {
    const existingOrderItem = currentOrder.find(
        orderItem => orderItem.id === itemToAdd.id
    )

    if (existingOrderItem) {
        return currentOrder.map(
            orderItem => orderItem.id === itemToAdd.id ?
                {...orderItem, quantity: orderItem.quantity +1 }
            :
                orderItem
        )
    }

    return [...currentOrder, { ...itemToAdd, quantity: 1 }]
}