import reduxConst from '../reduxConst.js'

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case reduxConst.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case reduxConst.SET_USERS_MENU_ACCOUNTS:
            return {
                ...state,
                accounts: action.payload
            }
        default:
            return state
    }
}

export default userReducer