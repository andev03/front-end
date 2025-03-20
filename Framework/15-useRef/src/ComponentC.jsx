import ComponentD from "./ComponentD.js";
import React, { useContext } from "react";
import { UserContext } from "./ComponentA.js";

function ComponentC() {
  const user = useContext(UserContext);
  return (
    <div className="box">
      <h1>ComponentC</h1>
      <h2>{`Tooi nef ${user}`}</h2>
      <ComponentD />
    </div>
  );
}

export default ComponentC;
