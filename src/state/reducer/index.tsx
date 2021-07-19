import { combineReducers } from "redux";
import { repoReducer } from "./repositoriesReducers";

export const reducers = combineReducers({
  repo: repoReducer,
});

export type  RootState = ReturnType<typeof reducers>