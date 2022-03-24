import { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import "./styles.css";

export default function App() {
  const [isFetchingJoke, setIsFetchingJoke] = useState(false);
  const [search, setSearch] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    searchJokes();
  }, []);

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
        setIsFetchingJoke(false);
      });
  };

  const onSearchChange = (value) => {
    setSearchTerm(value);
  };

  const renderJokes = () => {
    return (
      <ul>
        {jokes.map((item) => (
          <li key={item.id}>{item.joke}</li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <SearchForm
        onFormSubmit={searchJokes}
        onSearchValueChange={onSearchChange}
        isSearching={isFetchingJoke}
        onSingleSearchClick={() => searchJokes(1)}
      />

      {isFetchingJoke ? "Searching for jokes..." : renderJokes()}
    </div>
  );
}
