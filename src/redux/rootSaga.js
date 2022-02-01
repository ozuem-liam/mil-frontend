import { all } from "redux-saga/effects";
import { userSaga } from "./UserRedux/saga";

export default function* rootSaga() {
  yield all([...userSaga]);
}
