const reducers = (oldState, action) => {
if(action.type === 'RESERVE_TABLE') {
    return {
        ...oldState,
        reservations:[...oldState.reservations, action.id]
    }   
 }
 return oldState;
}

export default reducers;