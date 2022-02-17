import * as types from "./actionType";
import { takeEvery, put, delay, fork, call } from "redux-saga/effects";
import { getPostsApi } from "../Api";
import { getPostsSuccess, getPostsError } from "./actions";

function* onPostsStartAsync() {
  try {
    const response = yield call(getPostsApi);
    if (response.status === 200) {
      yield delay(500);
      yield put(getPostsSuccess(response.data.data));
    }
  } catch (error) {
    yield put(getPostsError(error.message));
  }
}

function* onPosts() {
  yield takeEvery(types.GET_POSTS_START, onPostsStartAsync);
}

export const postSaga = [fork(onPosts)];
