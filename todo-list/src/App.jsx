import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    let existLocal = localStorage.getItem("todo");
    if (existLocal) {
      setList(JSON.parse(existLocal));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // let valueInput = e.target.querySelector("input").value;

    // let arr = [];

    // arr.push(input);
    const updatedList = [...list, input];

    setList(updatedList);

    setInput("");

    localStorage.setItem("todo", JSON.stringify(updatedList));
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
