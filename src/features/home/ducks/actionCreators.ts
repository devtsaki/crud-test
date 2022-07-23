import ActionNames from "./actionNames";

function getTodos() {
  return {
    type: ActionNames.FETCH_TODOS_REQUESTED,
    payload: {},
  } as const;
}

function todosSucceeded(data: any[]) {
  return {
    type: ActionNames.FETCH_TODOS_SUCCEDED,
    payload: {
      data,
    },
  } as const;
}

function todosFailed() {
  return {
    type: ActionNames.FETCH_TODOS_FAILED,
    payload: {},
  } as const;
}

export default {
  getTodos,
  todosSucceeded,
  todosFailed,
};
