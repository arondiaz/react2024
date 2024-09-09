import Title from "./components/Title";
import Input from "./components/Input";
import List from "./components/List";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(todos);

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

  //Filters

  const showAllTodos = () => {
    setActiveFilter("all");
  };

  const showActiveTodos = () => {
    setActiveFilter("active");
  };

  const showCompletedTodos = () => {
    setActiveFilter("completed");
  };

  //Limpiar tareas completadas
  const handleClearCompleted = () => {
    // Filtra las tareas, manteniendo solo las que no están completadas
    const updatedList = todos.filter((todo) => !todo.completed);
    // Actualiza el estado con la lista filtrada
    setTodos(updatedList);
  };

  useEffect(() => {
    switch (activeFilter) {
      case "all":
        setFilteredTodos(todos);
        break;

      case "active":
        const activeTodos = todos.filter((todos) => todos.completed === false);
        setFilteredTodos(activeTodos);
        break;

      case "completed":
        const completedTodo = todos.filter((todos) => todos.completed === true);
        setFilteredTodos(completedTodo);
        break;

      default:
        break;
    }
  }, [activeFilter, todos]);

  return (
    <div className="bg-gray-800 font-inter min-h-screen h-full text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Title />

        <Input addTodo={addTodo} />
        <List
          todos={filteredTodos}
          handleSetComplete={handleSetComplete}
          handleSetDelete={handleSetDelete}
          activeFilter={activeFilter}
          showAllTodos={showAllTodos}
          showActiveTodos={showActiveTodos}
          showCompletedTodos={showCompletedTodos}
          handleClearCompleted={handleClearCompleted}
        />
      </div>
    </div>
  );
}

export default App;
