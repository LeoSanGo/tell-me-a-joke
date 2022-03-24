import React from "react";

const SearchForm = (props) => {
  const onSubmit = (event) => {
    event.preventDefault();
    props.onFormSubmit();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Insert a search term"
        onChange={(event) => props.onSearchValueChange(event.target.value)}
      />
      <button disabled={props.isSearching}>Search</button>
      <button onClick={props.onSingleSearchClick} disabled={props.isSearching}>
        Tell me a joke!
      </button>
    </form>
  );
};

export default SearchForm;
