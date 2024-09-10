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

  const [filter, setFilter] = useState("All");

  const filterSelected = (filterSelected) => {
    const updatedFilter = filterSelected;
    setFilter(updatedFilter);

    if (filterSelected === "All") {
      console.log(filterSelected);
    } else if (filterSelected === "In progress") {
      console.log(filterSelected);
    } else if (filterSelected === "Completed") {
      console.log(filterSelected);
    }
  };

  const handleSetComplete = (id) => {
    const searchTask = todo.map((oneTask) => {
      if (oneTask.id === id) {
        return {
          ...oneTask,
          completed: !oneTask.completed,
        };
      }
      return oneTask;
    });

    setTodo(searchTask);
    
  };

  return (
    <div className="bg-blue-950 min-h-screen h-full flex justify-center items-center">
      <div className="container flex flex-col justify-center items-center">
        <Title />
        <Input addInputUserTask={addInputUserTask} />
        <ContainerTasks
          todo={todo}
          handleDeleteTask={handleDeleteTask}
          filterSelected={filterSelected}
          handleSetComplete={handleSetComplete}
        />
      </div>
    </div>
  );
}

export default App;
