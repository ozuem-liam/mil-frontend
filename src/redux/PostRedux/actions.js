import * as types from "./actionType"


export const getPostsStart = () => ({
    type: types.GET_POSTS_START,
})

export const getPostsSuccess = (post) => ({
    type: types.GET_POSTS_SUCCESS,
    payload: post
})


export const getPostsError = (error) => ({
    type: types.GET_POSTS_ERROR,
    payload: error
})