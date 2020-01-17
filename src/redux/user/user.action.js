//function that return object 
//action creators 
//to create appropriate effects in our reducer the type 
//should align with te reducer action.
import {UserActionTypes} from './user.types'



export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});