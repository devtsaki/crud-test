import { combineReducers } from "redux";
import { TodosReducer } from "features/home/ducks";

const rootReducer = combineReducers({
  data: combineReducers({ home: TodosReducer }),
});

export default rootReducer;
