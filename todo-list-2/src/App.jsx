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

  const handleSetComplete = (id) => {
    const updatedList = todos.map((todo) => {
      if (todo.id === id) {
        //a la tarea que coincide con el id que le hice click, hago una copia de los datos(key: value) y le modifico el valor de la key completed con un ! para alternar true/false
        return { ...todo, completed: !todo.completed };
      }
      console.log(todo);
      return todo;
    });

    setTodos(updatedList);
  };

  const handleSetDelete = (id) => {
    const updateList = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(updateList);
  };

  return (
    <div className="bg-gray-800 font-inter min-h-screen h-full text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Title />

        <Input addTodo={addTodo} />
        <List
          todos={todos}
          handleSetComplete={handleSetComplete}
          handleSetDelete={handleSetDelete}
        />
      </div>
    </div>
  );
}

export default App;
