import * as types from "./actionType";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

export const PostReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_POSTS_START:
      return {
        ...state,
        loading: true,
      };
    case types.GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };

    case types.GET_POSTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};