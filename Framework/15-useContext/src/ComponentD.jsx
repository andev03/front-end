import React, { useContext } from "react";
import { UserContext } from "./ComponentA.jsx";
import { createContext } from "react";

function ComponentD() {
  const user = createContext(UserContext);

  return (
    <div className="box">
      <h1>ComponentD</h1>
      <h2>{`Bye ${user}`}</h2>
    </div>
  );
}

export default ComponentD;
