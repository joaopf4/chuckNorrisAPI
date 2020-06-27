const initialState = {
    jokes: []
}

export const jokes = (state = initialState, action) => {
    switch(action.type){
    case 'SET_ALL_JOKES': {
        return {...state, jokes: action.payload.jokes}
    }
    
    default:
        return state
    }
}
