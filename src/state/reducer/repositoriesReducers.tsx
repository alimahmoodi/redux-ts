import { ActionsType } from "../action-types";
import { Action } from "../actions";

interface RepoState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

export const repoReducer = (
  state: RepoState = initialState,
  action: Action
): RepoState => {
  switch (action.type) {
    case ActionsType.SEARCH_REPO:
      return { loading: true, error: null, data: [] };
    case ActionsType.SEARCH_REPO_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionsType.SEARCH_REPO_ERROR:
      return { loading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};
