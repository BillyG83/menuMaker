import reduxConst from '../reduxConst.js'

export const setUsersAccounts = accounts => ({
    type: reduxConst.SET_USERS_MENU_ACCOUNTS,
    payload: accounts
})

export const addNewUsersAccounts = account => ({
    type: reduxConst.ADD_NEW_ACCOUNT_TO_STORE,
    payload: account
})