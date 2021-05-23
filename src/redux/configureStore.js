import { applyMiddleware, combineReducers, createStore } from 'redux';
import { application, messages, contacts } from "./ducks";
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const logger = createLogger({
  diff: true,
  collapsed: true,
})

export const store = createStore(
  combineReducers({ application, messages, contacts }),
  applyMiddleware(thunk, logger)
);
