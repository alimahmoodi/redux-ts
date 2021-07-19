import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { actionCreators } from "../state";
import { useActions } from "../hooks/useActions";
import { useSelector } from "react-redux";

export const RepoList = () => {
  const [term, setTerm] = useState("");
  // const dispatch = useDispatch();
  const { searchRepo } = useActions();
  // const { data, error, loading } = useSelector((state) => state.repo);
  // console.log(state);
  const onsubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepo(term);
  };
  return (
    <div>
      <form onSubmit={onsubmit}>
        <input onChange={(e) => setTerm(e.target.value)} value={term} />
        <button>search</button>
      </form>
    </div>
  );
};
