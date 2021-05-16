import { createSelector } from 'reselect'

const menus = state => state.menus

export const selectUserAccounts = createSelector(
    [menus],
    menus => menus.accounts
)