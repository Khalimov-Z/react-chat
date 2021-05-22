import { applyMiddleware, combineReducers, createStore } from 'redux';
import { application, messages, contacts } from "./ducks";
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';

export const store = createStore(
  combineReducers({ application, messages, contacts }),
  applyMiddleware(thunk, logger)
);
