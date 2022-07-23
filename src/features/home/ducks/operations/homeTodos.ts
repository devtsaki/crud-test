import { call, put, takeLatest } from "redux-saga/effects";

import Services from "services";
import ActionCreators from "features/home/ducks/actionCreators";
import ActionNames from "features/home/ducks/actionNames";

function* homeTodosWatcher() {
  yield takeLatest(ActionNames.FETCH_TODOS_REQUESTED, handleHomeTodos);
}

function* handleHomeTodos({ action }: any): any {
  //   const { payload } = action;

  try {
    // const { limit, page, order = 'DESC' } = payload;

    const response = yield call(Services.Api.Data.get, "/todos", {
      params: {},
    });

    yield put(ActionCreators.todosSucceeded(response.data));
  } catch (error) {
    yield put(ActionCreators.todosFailed());
  }
}

export default homeTodosWatcher;
