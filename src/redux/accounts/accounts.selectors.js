import { createSelector } from 'reselect'

const menus = state => state.menus

export const selectUserAccounts = createSelector(
    [menus],
    menus => menus.accounts
)

export const selectAccountToEdit = createSelector(
    [menus],
    menus => menus.accountToEdit
)

export const selectAccountsMenu = createSelector(
    [selectAccountToEdit],
    account => account.businessMenu
)

export const selectAccountsSocial = createSelector(
    [selectAccountToEdit],
    account => account.businessSocial
)