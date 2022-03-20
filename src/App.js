import "./styles.css";

const tellJoke = () => {
  console.log("joke");
};

export default function App() {
  return <button onClick={tellJoke}>Tell me a joke!</button>;
}
