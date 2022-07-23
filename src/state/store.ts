import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
import rootSagas from "./rootSagas";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware] as Array<any>;

const Store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
});

// Initialize Sagas
sagaMiddleware.run(rootSagas);

export default Store;
