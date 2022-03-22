import { useState } from "react";
import "./styles.css";

export default function App() {
  const [joke, setJoke] = useState();

  const onTellJoke = () => {
    fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
      .then((response) => response.json())
      .then((json) => setJoke(json.joke));
  };
  return (
    <div>
      <button onClick={onTellJoke}>Tell me a joke!</button>
      <p>{joke}</p>
    </div>
  );
}
