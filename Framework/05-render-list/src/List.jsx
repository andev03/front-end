function List() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "banana", calories: 96 },
    { id: 3, name: "cherry", calories: 97 },
    { id: 4, name: "date", calories: 98 },
    { id: 5, name: "elderberry", calories: 99 },
  ];

  //   fruits.sort((a, b) => a.name.localeCompare(b.name)); //ALPHABETICAL
  //   fruits.sort((a, b) => b.name.localeCompare(a.name)); //REVERSE ALPHABETICAL
  //   fruits.sort((a, b) => a.calories - b.calories); //NUMERIC
  //   fruits.sort((a, b) => b.calories - a.calories); //REVERSE NUMERIC

  const lowCalFruit = fruits.filter((fruit) => fruit.calories < 96);

  const listItems = lowCalFruit.map((lowCalFruit) => (
    <li key={lowCalFruit.name}>
      {lowCalFruit.name}: &nbsp;
      {lowCalFruit.calories} calories
    </li>
  ));

  return <ol>{listItems}</ol>;
}

export default List;
