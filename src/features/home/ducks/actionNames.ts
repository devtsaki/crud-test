const PREFIX = "home";

const ActionNames = {
  FETCH_TODOS_REQUESTED: `${PREFIX}/todos/requested`,
  FETCH_TODOS_SUCCEDED: `${PREFIX}/todos/succeded`,
  FETCH_TODOS_FAILED: `${PREFIX}/todos/failed`,

  CREATE_TODO_REQUESTED: `${PREFIX}/create-todo/requested`,
  CREATE_TODO_SUCCEDED: `${PREFIX}/create-todo/succeded`,
  CREATE_TODO_FAILED: `${PREFIX}/create-todo/failed`,
};

export default ActionNames;
