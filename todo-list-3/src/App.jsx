import "./App.css";
import Title from "./components/Title";
import Input from "./components/Input";
import ContainerTasks from "./components/ContainerTasks";
import { tasksDB } from "../../todo-list-2/src/db.js/tasksDB";
import { useEffect, useState } from "react";

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

  const [filterUser, setFilterUser] = useState("All");
  const [showOnlyFilteredTask, setShowOnlyFilteredTask] = useState(todo);

  useEffect(() => {
    if (filterUser === "All") {
      setShowOnlyFilteredTask(todo);
    } else if (filterUser === "In progress") {
      const inProgessTask = todo.filter((oneTask) => {
        return oneTask.completed === false;
      });
      setShowOnlyFilteredTask(inProgessTask);
    } else if (filterUser === "Completed") {
      const completedTask = todo.filter((oneTask) => {
        return oneTask.completed === true;
      });

      setShowOnlyFilteredTask(completedTask);
    }
  }, [todo, filterUser]);

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

  const clearCompletedTask = () => {
    const completedTask = todo.filter((oneTask) => {
      return oneTask.completed !== true;
    });

    setTodo(completedTask);
  };

  return (
    <div className="bg-blue-950 min-h-screen h-full flex justify-center items-center">
      <div className="container flex flex-col justify-center items-center">
        <Title />
        <Input addInputUserTask={addInputUserTask} />
        <ContainerTasks
          todo={todo}
          handleDeleteTask={handleDeleteTask}
          setFilterUser={setFilterUser}
          handleSetComplete={handleSetComplete}
          filterUser={filterUser}
          showOnlyFilteredTask={showOnlyFilteredTask}
          clearCompletedTask={clearCompletedTask}
        />
      </div>
    </div>
  );
}

export default App;
