import { useState } from "react";

function NameList() {
  const [list, setList] = useState(["Thoughts"]);
  const [name, setName] = useState(() => "");

  const onAddName = () => {
    setList([...list, name]);
    setName("");
  };

  return (
    <nav>
      <ul>
        {list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onAddName}>Add Notes</button>
    </nav>
  );
}

function Counter() {
  const [count, setCount] = useState(1);

  function addOne() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <button onClick={addOne}>Count Sheep = {count}</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter />
      <NameList />
    </div>
  );
}

export default App;