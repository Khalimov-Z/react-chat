import { combineReducers, createStore } from "redux";
import { application, messages, contacts } from "./ducks";

export const store = createStore(
  combineReducers({ application, messages, contacts })
);
