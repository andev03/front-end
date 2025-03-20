// useState() = Re-renders the component when the state value changes.

// useRef() = "use Reference" does not cause re-renders when its value changes.
//             when you don't want that information to trigger new renders.
//             but you don't want that information to trigger new renders.

//             1. Accessing/Interacting with DOM elements
//             2. Handling focus, Animations, and Transitions
//             3. Managing Timers and Intervals

import React, { useState, useEffect, useRef } from "react";
function MyComponent() {
  const ref = useRef(0);

  useEffect(() => {
    console.log("COMPONENT RENDERED");
  });

  const handleClick = () => {
    ref.current++;
    console.log(ref.current);
  };
  return <button onClick={handleClick}>Click me!</button>;
}

export default MyComponent;
