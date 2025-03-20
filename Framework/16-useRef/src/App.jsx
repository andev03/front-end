// useContext() = React Hook that allows you to share values
//                between multiple levels of components
//                without passing props through each level

// Provider Component
// 1. import {createContext} from 'react';
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//      <Child />
//    <MyContext.Provider>

// Consumer Component
// 1. import React, { useContext } from 'react'
//    import { MyContext } from './ComponentA';
// 2. const value = useContext(MyContext);

import MyComponent from "./MyComponent.jsx";

function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

export default App;
