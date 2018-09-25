const reducers = (oldState, action) => {
  if(action.type === 'RESERVE_TABLE') {
      return {
          ...oldState,
          reservations:[...oldState.reservations, action.id]
      }   
 }

    if (action.type === "ADD") {
        return {
            ...oldState, 
            cartItems: [...oldState.cartItems, action.payload]
        }
    }
    return oldState;
}

export default reducers;