import { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import JokesSearchList from "./JokesSearchList";
import "./styles.css";

export default function App() {
  const [isFetchingJoke, setIsFetchingJoke] = useState(false);
  const [hasResults, setHasResults] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [jokes, setJokes] = useState([]);

  const searchJokes = (limit = 20) => {
    setIsFetchingJoke(true);
    fetch(
      `https://icanhazdadjoke.com/search?term=${searchTerm}&limit=${limit}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      }
    )
      .then((response) => response.json())
      .then((json) => {
        setJokes(json.results);
        console.log(json.results);

        setIsFetchingJoke(false);
        jokes.length > 0 ? setHasResults(true) : setHasResults(false);
      });

    console.log(hasResults);
  };

  const onSearchChange = (value) => {
    setSearchTerm(value);
  };

  const clearSearch = (e) => {
    setSearchTerm("");
    setJokes([]);
    setHasResults(true);
    e.preventDefault();
  };

  return (
    <div className="App">
      <img className="logo" src="/google-dad-jokes-logo.png" alt="dad jokes" />
      <SearchForm
        onFormSubmit={searchJokes}
        onSearchValueChange={onSearchChange}
        isSearching={isFetchingJoke}
        onSingleSearchClick={() => searchJokes(1)}
        onClearSearch={clearSearch}
        inputSearchValue={searchTerm}
      />

      {isFetchingJoke ? (
        "Searching for jokes..."
      ) : (
        <JokesSearchList listOfJokes={jokes} />
      )}
      <p>{jokes.length > 0 || hasResults ? "" : "No results found!"}</p>
    </div>
  );
}
