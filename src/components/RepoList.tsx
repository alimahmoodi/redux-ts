import React, { useState } from "react";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useDispatch } from "react-redux";
import { useActions } from "../hooks/useActions";

export const RepoList = () => {
  const [term, setTerm] = useState("");
  // const dispatch = useDispatch();
  const { searchRepo } = useActions();
  const { data, error, loading } = useTypeSelector((state) => state.repo);
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
      {error && <h3>{error}</h3>}
      {loading && <h3>loading...</h3>}
      {!error &&
        !loading &&
        data.map((name) => {
          return <div key={name}>{name}</div>;
        })}
    </div>
  );
};
