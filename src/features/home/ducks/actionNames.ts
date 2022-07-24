const PREFIX = "home";

const ActionNames = {
  FETCH_TODOS_REQUESTED: `${PREFIX}/todos/requested`,
  FETCH_TODOS_SUCCEDED: `${PREFIX}/todos/succeded`,
  FETCH_TODOS_FAILED: `${PREFIX}/todos/failed`,

  CREATE_TODO_REQUESTED: `${PREFIX}/create/requested`,
  CREATE_TODO_SUCCEDED: `${PREFIX}/create/succeded`,
  CREATE_TODO_FAILED: `${PREFIX}/create/failed`,

  DELETE_TODO_REQUESTED: `${PREFIX}/delete/requested`,
  DELETE_TODO_SUCCEDED: `${PREFIX}/delete/succeded`,
  DELETE_TODO_FAILED: `${PREFIX}/delete/failed`,

  RESET_DATA: `${PREFIX}/reset/data`,
};

export default ActionNames;
