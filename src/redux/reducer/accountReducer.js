const initialValue = {
    userLogin: {}
}

export const accountReducer = (state = initialValue, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS' : {
            state.userLogin = action.payload.data[0];
            localStorage.setItem('role', JSON.stringify(action.payload.data[0].role));
            localStorage.setItem('jwt', JSON.stringify(action.payload.data[0].id));
            localStorage.setItem('profileId', JSON.stringify(action.payload.data[0].id))
            window.location.replace(`/newsfeed`)
            return {...state};
        } 
        default: return state;
    }
}