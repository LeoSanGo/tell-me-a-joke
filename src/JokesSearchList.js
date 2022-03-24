import React from "react";
import "./JokesSearchList.css";

const JokesSearchList = (props) => {
  return (
    <>
      <ul className="jokes-list">
        {props.listOfJokes.map((item) => (
          <li key={item.id}>{item.joke}</li>
        ))}
      </ul>
    </>
  );
};

export default JokesSearchList;
