import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import {jokes} from "./chuckFacts";

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    chuckFacts: jokes,
    // Outros reducers aqui
  });
