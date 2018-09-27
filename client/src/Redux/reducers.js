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
    } //Manager CRUD operations
    else if(action.type === 'ADD_TO_MENU') {
        return {
            ...oldState,
            menu:[...oldState.menu, action.newMenu]
        }
    } else if (action.type === "DELETE_FROM_MENU") { 
        const deleteItem = oldState.menu.filter(item => {
         return item.id !== action.id
        }); 
        return {
            ...oldState,
            menu: deleteItem
        } 
    }
    else if(action.type === 'UPDATE') {
      const updatedMenu = {
          title: action.menu.title,
          details: action.menu.details,
          price: action.menu.price,
          thumbsup: action.menu.thumbsup
      }
      return {
          ...oldState,
          menu:[...oldState, updatedMenu]
      }
    }
    else {
        return oldState;
    }
}

export default reducers;