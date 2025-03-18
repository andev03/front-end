import React, { useState } from "react";

function MyComponent() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  const handleAddCar = () => {
    const newCar = {
      year: carYear,
      make: carMake,
      model: carModel,
    };

    setCars((cars) => [...cars, newCar]);
  };
  const handleRemoveCar = (index) => {
    setCars(c => c.filter((_, i) => i != index));
  };
  const handleYearChange = (event) => {
    setCarYear(event.target.value);
  };
  const handleMakeChange = (event) => {
    setCarMake(event.target.value);
  };
  const handleModelChange = (event) => {
    setCarModel(event.target.value);
  };

  return (
    <div>
      <h2>List of car Objects</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onChange={() => handleRemoveCar(index)}>
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ul>
      <input
        placeholder="Enter car year"
        type="number"
        value={carYear}
        onChange={handleYearChange}
      ></input>
      <br />
      <input
        type="text"
        value={carMake}
        onChange={handleMakeChange}
        placeholder="Enter car make"
      />
      <br />
      <input
        type="text"
        value={carModel}
        onChange={handleModelChange}
        placeholder="Enter car model"
      />
      <br />
      <button type="button" onClick={handleAddCar}>
        Add Car
      </button>
    </div>
  );
}

export default MyComponent;
