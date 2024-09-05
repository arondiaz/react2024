import { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // let valueInput = e.target.querySelector("input").value;

    let arr = [];

    arr.push(input);

    setList([...list, arr]);

    setInput("");
  };

  return (
    <>
      <div>
        <h1>TODO List</h1>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="todo">Agrega</label>
          <input
            type="text"
            name="todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input type="submit" disabled={input.trim() === ""} />
        </form>

        <ul>
          {list.length > 0 ? (
            list.map((listToDo, key) => <li key={key}>{listToDo}</li>)
          ) : (
            <h3>No hay nada</h3>
          )}
        </ul>
      </div>
    </>
  );
}

export default App;
