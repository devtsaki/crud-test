import { call, put, takeLatest } from "redux-saga/effects";

import Services from "services";
import ActionCreators from "features/home/ducks/actionCreators";
import ActionNames from "features/home/ducks/actionNames";

function* homeTodosWatcher() {
  yield takeLatest(ActionNames.FETCH_TODOS_REQUESTED, handleHomeTodos);
  yield takeLatest(ActionNames.CREATE_TODO_REQUESTED, handleCreateTodo);
}

function* handleHomeTodos(): any {
  try {
    const response = yield call(Services.Api.Data.get, "/todos", {
      params: {},
    });

    yield put(ActionCreators.todosSucceeded(response.data));
  } catch (error) {
    yield put(ActionCreators.todosFailed());
  }
}

function* handleCreateTodo(action: any): any {
  const { payload } = action;

  try {
    const { title } = payload;

    yield call(Services.Api.Data.post, "/todos", { title: title }, {});

    yield put(ActionCreators.createTodoSucceeded());
    yield put(ActionCreators.getTodos());
  } catch (error: any) {
    yield put(ActionCreators.createTodoFailed());
  }
}

export default homeTodosWatcher;
