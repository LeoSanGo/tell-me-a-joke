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
        onKeyPress={props.onFormSubmit}
      />
      <div>
        <button disabled={props.isSearching}>Search</button>
        <input
          className="input-number"
          type="number"
          min="1"
          max="20"
          value={props.inputJokeValue}
          onChange={(event) => props.onInputJokeValueChange(event.target.value)}
        />
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
