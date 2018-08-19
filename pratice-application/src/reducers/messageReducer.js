const messageReducer = (previousState ={displayMessage : ''}, action) => {
    var nextState = {...previousState};
    switch (action.type) {
        case 'ADD_MESSAGE':
            return {...previousState,displayMessage:action.message};
        default:
            return nextState;
    }
}

export default messageReducer;