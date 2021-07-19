import { combineReducers } from "redux";
import { repoReducer } from "./repositoriesReducers";

export const reducers = combineReducers({
  repo: repoReducer,
});
