import { useEffect, useState } from "react";
import "./App.css";
import Title from "./components/Title";
import TodoMainContainer from "./components/TodoMainContainer";

function App() {
  const [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

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

  const deleteTodo = (id) => {
    setTodos((prev) => {
      return prev.filter((oneTodo) => oneTodo.id !== id);
    });
  };

  const handleIsComplete = (id) => {
    setTodos((prev) =>
      prev.map((oneTodo) =>
        oneTodo.id === id
          ? { ...oneTodo, isCompleted: !oneTodo.isCompleted }
          : oneTodo
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="bg-lime-900 h-full min-h-screen flex justify-center items-center flex-col">
      <div className="bg-gray-400 w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-3xl justify-items-start">
        <Title />
        <TodoMainContainer
          addTodo={addTodo}
          todos={todos}
          deleteTodo={deleteTodo}
          handleIsComplete={handleIsComplete}
        />
      </div>

      <p>Desing is my passion..</p>
    </div>
  );
}

export default App;
