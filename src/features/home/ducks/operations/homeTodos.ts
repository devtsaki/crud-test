import { call, put, takeLatest } from "redux-saga/effects";

import Services from "services";
import ActionCreators from "features/home/ducks/actionCreators";
import ActionNames from "features/home/ducks/actionNames";

function* homeTodosWatcher() {
  yield takeLatest(ActionNames.FETCH_TODOS_REQUESTED, handleHomeTodos);
  yield takeLatest(ActionNames.CREATE_TODO_REQUESTED, handleCreateTodo);
  yield takeLatest(ActionNames.EDIT_TODO_REQUESTED, handleEditTodo);
  yield takeLatest(ActionNames.DELETE_TODO_REQUESTED, handleDeleteTodo);
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

function* handleEditTodo(action: any): any {
  const { payload } = action;

  try {
    const { id, title } = payload;

    yield call(Services.Api.Data.put, `/todos/${id}`, { id, title }, {});

    yield put(ActionCreators.editTodoSucceeded());
    yield put(ActionCreators.getTodos());
  } catch (error: any) {
    yield put(ActionCreators.editTodoFailed());
  }
}

function* handleDeleteTodo(action: any): any {
  const { payload } = action;

  try {
    const { id } = payload;

    yield call(Services.Api.Data.delete, `/todos/${id}`);

    yield put(ActionCreators.deleteTodoSucceeded());
    yield put(ActionCreators.getTodos());
  } catch (error: any) {
    yield put(ActionCreators.deleteTodoFailed());
  }
}

export default homeTodosWatcher;
