import { all } from "redux-saga/effects";
import { postSaga } from "./PostRedux/saga";

export default function* rootSaga() {
  yield all([...postSaga]);
}
