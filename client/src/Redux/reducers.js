const reducers = (oldState, action) => {
    if (action.type === "ADD") {
        return {
            ...oldState, 
            cartItems: [...oldState.cartItems, action.payload]
        }
    }
    return oldState;
}

export default reducers;