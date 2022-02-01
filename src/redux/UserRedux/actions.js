import * as types from "./actionType"


export const getUsersStart = () => ({
    type: types.GET_USERS_START,
})

export const getUsersSuccess = (user) => ({
    type: types.GET_USERS_SUCCESS,
    payload: user
})


export const getUsersError = (error) => ({
    type: types.GET_USERS_ERROR,
    payload: error
})