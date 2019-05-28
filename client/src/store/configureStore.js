import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { apiMiddleware } from "redux-api-middleware";
import { composeWithDevTools } from "redux-devtools-extension";

import logger from "../middleware/logger";
import crashReporter from "../middleware/crash-reporter";
import rootReducer from "../reducers";

const configureStore = preloadedState =>
  createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(
      //applyMiddleware(apiMiddleware, thunk)
      applyMiddleware(crashReporter, apiMiddleware, thunk, logger)
    )
  );

export default configureStore;
