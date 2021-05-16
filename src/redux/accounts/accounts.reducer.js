import reduxConst from '../reduxConst.js'

const INITIAL_STATE = {
    accounts: []
}

const accountsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case reduxConst.SET_USERS_MENU_ACCOUNTS:
            return {
                ...state,
                accounts: action.payload
            }
        default:
            return state
    }
}

export default accountsReducer