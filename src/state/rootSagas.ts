import { all } from "redux-saga/effects";

import { HomeTodosSagas } from "features/home/ducks";

export default function* rootSagas() {
  yield all([HomeTodosSagas()]);
}
