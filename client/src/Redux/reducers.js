const reducers = (oldState, action) => {
  if (action.type === 'RESERVE_TABLE') {
      return {
          ...oldState,
          reservations:[...oldState.reservations, action.reserve]
      } 
  } else if (action.type === "ADD") {
      return {
          ...oldState,
          cartItems: [...oldState.cartItems, action.payload]
      }
 } else if (action.type === "REMOVE_ITEM") { 
    const newCartItems = oldState.cartItems.filter(item => {
     return item.id !== action.payload.id
    }); 
    return {
        ...oldState,
        cartItems: newCartItems
    } 
    } else if (action.type === 'REGISTER_ADMIN')  {
        return {
            ...oldState,
            admin:[...oldState.admin, action.adminReg]
        } 
    }
    else {
        return oldState;
    }
}

export default reducers;