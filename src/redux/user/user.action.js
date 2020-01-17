//function that return object 
//action creators 
//to create appropriate effects in our reducer the type 
//should align with te reducer action.

export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
});