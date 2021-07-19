import { Provider } from "react-redux";
import { store } from "./state";
import { RepoList } from "./components/RepoList";

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>search for packages!</h1>
        <RepoList />
      </div>
    </Provider>
  );
};
