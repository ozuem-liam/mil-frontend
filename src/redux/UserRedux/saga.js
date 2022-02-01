import * as types from "./actionType";
import { takeEvery, put, delay, fork, call } from "redux-saga/effects";
import { getUsersApi } from "../Api";
import { getUsersSuccess, getUsersError } from "./actions";

function* onUsersStartAsync() {
  try {
    const response = yield call(getUsersApi);
    if (response.status === 200) {
      yield delay(500);
      yield put(getUsersSuccess(response.data.data));
    }
  } catch (error) {
    yield put(getUsersError(error.message));
  }
}

function* onUsers() {
  yield takeEvery(types.GET_USERS_START, onUsersStartAsync);
}

export const userSaga = [fork(onUsers)];
