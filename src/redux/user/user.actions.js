import reduxConst from '../reduxConst.js'

export const setCurrentUser = user => ({
    type: reduxConst.SET_CURRENT_USER,
    payload: user
})