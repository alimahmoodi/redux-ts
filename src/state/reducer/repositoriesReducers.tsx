interface RepoState {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface SearchRepoAction {
  type: "search_repo";
}

interface SearchRepoSuccessAction {
  type: "search_repo_success";
  payload: string[];
}

interface SearchRepoErrorAction {
  type: "search_repo_error";
  payload: string;
}

enum ActionsType {
  SEARCH_REPO = "search_repo",
  SEARCH_REPO_SUCCESS = "search_repo_success",
  SEARCH_REPO_ERROR = "search_repo_error",
}

type Action =
  | SearchRepoAction
  | SearchRepoSuccessAction
  | SearchRepoErrorAction;

export const reducer = (state: RepoState, action: Action): RepoState => {
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
