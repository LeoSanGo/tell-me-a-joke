import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [isFetchingJoke, setIsFetchingJoke] = useState(true);
  const [joke, setJoke] = useState();

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = () => {
    setIsFetchingJoke(true);
    fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
      .then((response) => response.json())
      .then((json) => {
        setJoke(json.joke);
        setIsFetchingJoke(false);
      });
  };

  const onTellJoke = () => {
    fetchJoke();
  };
  return (
    <div>
      <button onClick={onTellJoke} disabled={isFetchingJoke}>
        Tell me a joke!
      </button>
      <p>{isFetchingJoke ? "Loading joke..." : joke}</p>
    </div>
  );
}
