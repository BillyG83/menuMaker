import reduxConst from '../reduxConst.js'

export const setCurrentUser = user => ({
    type: reduxConst.SET_CURRENT_USER,
    payload: user
})

export const setUsersAccounts = accounts => ({
    type: reduxConst.SET_USERS_MENU_ACCOUNTS,
    payload: accounts
})