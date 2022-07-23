import { all } from "redux-saga/effects";

import homeTodosWatcher from "./homeTodos";

// Entry point to start all the Sagas
function* rootSaga() {
  yield all([homeTodosWatcher()]);
}

export default rootSaga;
