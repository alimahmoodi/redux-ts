import { ActionsType } from "../action-types";

interface SearchRepoAction {
  type: ActionsType.SEARCH_REPO;
}

interface SearchRepoSuccessAction {
  type: ActionsType.SEARCH_REPO_SUCCESS;
  payload: string[];
}

interface SearchRepoErrorAction {
  type: ActionsType.SEARCH_REPO_ERROR;
  payload: string;
}

export type Action =
  | SearchRepoAction
  | SearchRepoSuccessAction
  | SearchRepoErrorAction;
