import React from "react";
import "./SearchForm.css";

const SearchForm = (props) => {
  const onSubmit = (event) => {
    event.preventDefault();
    props.onFormSubmit();
  };

  return (
    <form onSubmit={onSubmit} className="search-form">
      <input
        type="text"
        placeholder="Insert a search term"
        value={props.inputSearchValue}
        onChange={(event) => props.onSearchValueChange(event.target.value)}
      />
      <div>
        <button disabled={props.isSearching}>Search</button>
        <button
          onClick={props.onSingleSearchClick}
          disabled={props.isSearching}
        >
          Tell me a joke!
        </button>
        <button onClick={props.onClearSearch}>Clear</button>
      </div>
    </form>
  );
};

export default SearchForm;
