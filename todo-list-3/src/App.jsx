import "./App.css";
import Title from "./components/Title";
import Input from "./components/Input";
import ContainerTasks from "./components/ContainerTasks";
import { tasksDB } from "../../todo-list-2/src/db.js/tasksDB";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState(tasksDB);

  const addInputUserTask = (title) => {
    const idgen = todo.length > 0 ? todo[todo.length - 1].id + 1 : 1;
    const newUserTask = {
      id: idgen,
      title,
      completed: false,
    };

    const updatedTask = [...todo, newUserTask];

    setTodo(updatedTask);
  };

  const handleDeleteTask = (id) => {
    const deleteTask = todo.filter((oneTask) => {
      return oneTask.id !== id;
    });

    setTodo(deleteTask);
  };

  return (
    <div className="bg-blue-950 min-h-screen h-full flex justify-center items-center">
      <div className="container flex flex-col justify-center items-center">
        <Title />
        <Input addInputUserTask={addInputUserTask} />
        <ContainerTasks todo={todo} handleDeleteTask={handleDeleteTask} />
      </div>
    </div>
  );
}

export default App;
