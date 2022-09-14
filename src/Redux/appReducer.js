
//Types

 const SET_ERROR_DATA = 'APP/SET_ERROR_DATA'
 const SET_SUCCESS = 'APP/SET_SUCCESS'


//Initial state for reducer
const initialState = {
    error: '',
    success: '',
};

//Reducer (products)
export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ERROR_DATA:
            return {...state, error: action.payload};
        case SET_SUCCESS:
            return {...state, success: action.payload};
        default:
            return state
    }
};


//Action creator (thunk) and Actions
export const setError = (error) => {
    return {
        type: SET_ERROR_DATA,
        payload: error
    }
}
export const setSuccess = (success) => {
    return {
        type: SET_SUCCESS,
        payload: success
    }
}
