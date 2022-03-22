import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [isFetchingJoke, setIsFetchingJoke] = useState(false);
  const [search, setSearch] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    searchJokes();
  }, []);

  const searchJokes = () => {
    setIsFetchingJoke(true);
    fetch(`https://icanhazdadjoke.com/search?term=${searchTerm}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
      .then((response) => response.json())
      .then((json) => {
        setJokes(json.results);
        setIsFetchingJoke(false);
        console.log(json.results);
      });
  };

  const onTellJoke = () => {
    searchJokes();
  };

  const onSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const onSubmitJoke = (event) => {
    event.preventDefault();
    searchJokes();
  };

  const renderJokes = () => {
    return (
      <ul>
        {jokes.map((item) => (
          <li>{item.joke}</li>
        ))}
      </ul>
    );
  };
  return (
    <div>
      <form onSubmit={onSubmitJoke}>
        <input
          type="text"
          placeholder="Insert a search term"
          onChange={onSearchChange}
        ></input>
        <button>Search</button>
        <button onClick={onTellJoke} disabled={isFetchingJoke}>
          Tell me a joke!
        </button>
      </form>
      {isFetchingJoke ? "Searching for jokes..." : renderJokes()}
      <p>Search term: {searchTerm}</p>
    </div>
  );
}
