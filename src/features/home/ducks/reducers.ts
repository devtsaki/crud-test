import { combineReducers } from "redux";

import CONSTANTS from "common/constants";
import ActionNames from "features/home/ducks/actionNames";

const todosReducerInitialState = {
  data: [],
  status: "",
};
function TodosDataReducer(state = todosReducerInitialState, action: any) {
  switch (action.type) {
    case ActionNames.FETCH_TODOS_REQUESTED: {
      return {
        ...state,
        status: CONSTANTS.RESPONSE_STATUS.PENDING,
      };
    }

    case ActionNames.FETCH_TODOS_SUCCEDED: {
      return {
        data: action.payload.data,
        status: CONSTANTS.RESPONSE_STATUS.SUCCESS,
      };
    }

    case ActionNames.FETCH_TODOS_FAILED: {
      return {
        ...state,
        status: CONSTANTS.RESPONSE_STATUS.FAILURE,
      };
    }

    default:
      return state;
  }
}

const TodosReducer = combineReducers({
  todos: TodosDataReducer,
});

export default TodosReducer;
