import reduxConst from '../reduxConst.js'

export const setUsersAccounts = accounts => ({
    type: reduxConst.SET_USERS_MENU_ACCOUNTS,
    payload: accounts
})