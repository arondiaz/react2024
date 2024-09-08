import Title from "./components/Title";
import Input from "./components/Input";
import List from "./components/List";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Hacer la compra",
      completed: false,
    },
    {
      id: 2,
      title: "Estudiar React",
      completed: false,
    },
    {
      id: 3,
      title: "Pasear al perro",
      completed: false,
    },
  ]);

  const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;

    const newTask = {
      id: lastId + 1,
      title,
      completed: false,
    };

    const todoList = [...todos];

    todoList.push(newTask);

    setTodos(todoList);
  };

  return (
    <div className="bg-gray-800 font-inter min-h-screen h-full text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Title />

        <Input addTodo={addTodo} />
        <List todos={todos} />
      </div>
    </div>
  );
}

export default App;
