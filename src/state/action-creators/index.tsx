import axios from "axios";
import { ActionsType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions";
export const searchRepo = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionsType.SEARCH_REPO,
    });
    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        { params: { text: term } }
      );
      const names = data.objects.map((result: any) => {
        return result.package.name;
      });
      dispatch({
        type: ActionsType.SEARCH_REPO_SUCCESS,
        payload: names,
      });
    } catch (err) {
      dispatch({
        type: ActionsType.SEARCH_REPO_ERROR,
        payload: err.message,
      });
    }
  };
};

// export default searchRepo;
