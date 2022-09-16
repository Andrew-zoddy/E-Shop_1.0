//types

import {setError} from "./appReducer";
import {usersAPI} from "../api/usersEndpoints";

const SET_USERS = 'SET_USERS';

//Initial State for reducer
const initialState = {
    users: [],
}

//Reducer
export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: action.payload};
        default:
            return state
    }
};

//action creator (thunk)
export const getUsers = () => async (dispatch) => {
   try{
       dispatch(setError(''))
       const response = await usersAPI.getUsers();
       if (response.status === 200) {
           dispatch(setUsers(response.data))
           
       }

   }
   catch (error) {
       dispatch(setError(error))
   }
};

//Action to set users response
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        payload: users,
    }

}

