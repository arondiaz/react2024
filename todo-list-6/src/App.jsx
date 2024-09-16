import { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import TodoMainContainer from "./components/TodoMainContainer";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (inputRef) => {
    let inputUser = inputRef.current.value;

    const newTodo = {
      id: Date.now(),
      title: inputUser,
      isCompleted: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);

    inputRef.current.value = "";
  };

  return (
    <div className="bg-lime-900 h-full min-h-screen flex justify-center items-center flex-col">
      <div className="bg-gray-400 w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-3xl justify-items-start">
        <Title />
        <TodoMainContainer addTodo={addTodo} todos={todos}/>
      </div>

      <p>Desing is my passion..</p>
    </div>
  );
}

export default App;
