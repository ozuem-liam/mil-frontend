import * as types from "./actionType";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

export const UserReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS_START:
      return {
        ...state,
        loading: true,
      };
    case types.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case types.GET_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};