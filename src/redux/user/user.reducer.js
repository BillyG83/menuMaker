import reduxConst from '../reduxConst.js'

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    if (!action.payload) return state
    
    switch (action.type) {
        case reduxConst.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state
    }
}

export default userReducer