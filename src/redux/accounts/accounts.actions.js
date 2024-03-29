import reduxConst from '../reduxConst.js'

export const setUsersAccounts = accounts => ({
    type: reduxConst.SET_USERS_MENU_ACCOUNTS,
    payload: accounts
})

export const addNewUsersAccounts = account => ({
    type: reduxConst.ADD_NEW_ACCOUNT_TO_STORE,
    payload: account
})

export const selectAccountToEdit = account => ({
    type: reduxConst.SELECT_MENU_TO_EDIT,
    payload: account
})

export const accountUpdateSocial = social => ({
    type: reduxConst.ACCOUNT_UPDATE_SOCIAL,
    payload: social
})

export const accountUpdateMenu = menu => ({
    type: reduxConst.ACCOUNT_UPDATE_MENU,
    payload: menu
})