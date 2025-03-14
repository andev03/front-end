import React, { useState } from "react";

function MyComponent() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });

  const handleYearChange = (event) => {
    setCar({ ...car, year: event.target.value });
  };

  const handleMakeChange = (event) => {
    setCar({ ...car, make: event.target.value });
  };

  const handleModelChange = (event) => {
    setCar((car) => ({ ...car, model: event.target.value }));
  };

  return (
    <div>
      <p>
        Your favourite car is: {car.year} {car.make} {car.model}
      </p>
      <input type="number" value={car.year} onChange={handleYearChange} />
      <br />
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <br />
      <input type="text" value={car.model} onChange={handleModelChange} />
      <br />
    </div>
  );
}

export default MyComponent;
