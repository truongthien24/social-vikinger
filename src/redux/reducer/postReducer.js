const initialState = {}

export const postReducer = (state = initialState, action) => {
    switch(action.type) {
        case '': {
            return {...state}
        }
        default: return state
    }
} 