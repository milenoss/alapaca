//actually a function that get two objects
// gets the state and 
// action

const INITIAL_STATE = { 
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => { 
    switch(action.type) { 
        case 'SET_CURRENT_USER': 
        return { 
            currentUser: action.payload
        }
        default: 
        return state; 
    }
} 

export default userReducer; 