import { combineReducers } from "redux";
import update from "immutability-helper";

import CONSTANTS from "common/constants";
import ActionNames from "features/home/ducks/actionNames";

const todosReducerInitialState = {
  data: [],
  status: "",
  create: { status: "" },
};
function TodosDataReducer(state = todosReducerInitialState, action: any) {
  switch (action.type) {
    case ActionNames.FETCH_TODOS_REQUESTED: {
      return update(state, {
        status: { $set: CONSTANTS.RESPONSE_STATUS.PENDING },
      });
    }

    case ActionNames.FETCH_TODOS_SUCCEDED: {
      return update(state, {
        data: { $set: action.payload.data },
        status: { $set: CONSTANTS.RESPONSE_STATUS.SUCCESS },
      });
    }

    case ActionNames.FETCH_TODOS_FAILED: {
      return update(state, {
        status: { $set: CONSTANTS.RESPONSE_STATUS.FAILURE },
      });
    }

    case ActionNames.CREATE_TODO_REQUESTED: {
      return update(state, {
        create: { status: { $set: CONSTANTS.RESPONSE_STATUS.PENDING } },
      });
    }

    case ActionNames.CREATE_TODO_SUCCEDED: {
      return update(state, {
        create: { status: { $set: CONSTANTS.RESPONSE_STATUS.SUCCESS } },
      });
    }

    case ActionNames.CREATE_TODO_FAILED: {
      return update(state, {
        create: { status: { $set: CONSTANTS.RESPONSE_STATUS.FAILURE } },
      });
    }

    default:
      return state;
  }
}

const TodosReducer = combineReducers({
  todos: TodosDataReducer,
});

export default TodosReducer;
