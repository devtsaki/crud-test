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

function createTodo({ title }: { title: string }) {
  return {
    type: ActionNames.CREATE_TODO_REQUESTED,
    payload: {
      title,
    },
  } as const;
}

function createTodoSucceeded() {
  return {
    type: ActionNames.CREATE_TODO_SUCCEDED,
    payload: {},
  } as const;
}

function createTodoFailed() {
  return {
    type: ActionNames.CREATE_TODO_FAILED,
    payload: {},
  } as const;
}

function editTodo({ id, title }: { id: number; title: string }) {
  return {
    type: ActionNames.EDIT_TODO_REQUESTED,
    payload: {
      id,
      title,
    },
  } as const;
}

function editTodoSucceeded() {
  return {
    type: ActionNames.EDIT_TODO_SUCCEDED,
    payload: {},
  } as const;
}

function editTodoFailed() {
  return {
    type: ActionNames.EDIT_TODO_FAILED,
    payload: {},
  } as const;
}

function deleteTodo({ id }: { id: number }) {
  return {
    type: ActionNames.DELETE_TODO_REQUESTED,
    payload: {
      id,
    },
  } as const;
}

function deleteTodoSucceeded() {
  return {
    type: ActionNames.DELETE_TODO_SUCCEDED,
    payload: {},
  } as const;
}

function deleteTodoFailed() {
  return {
    type: ActionNames.DELETE_TODO_FAILED,
    payload: {},
  } as const;
}

function resetApiData(slice = "all") {
  return {
    type: ActionNames.RESET_DATA,
    payload: {
      slice,
    },
  };
}

export default {
  getTodos,
  todosSucceeded,
  todosFailed,

  createTodo,
  createTodoSucceeded,
  createTodoFailed,

  editTodo,
  editTodoSucceeded,
  editTodoFailed,

  deleteTodo,
  deleteTodoSucceeded,
  deleteTodoFailed,

  resetApiData,
};
