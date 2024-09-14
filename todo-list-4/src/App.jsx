import Title from "./components/Title";
import Input from "./components/Input";
import "./App.css";
import { useState } from "react";
import TasksContainer from "./components/TasksContainer";

function App() {
  const [task, setTask] = useState([]);

  const addUserTask = (e, setInput) => {
  

    const idGen = task.length > 0 ? task[task.length - 1].id + 1 : 1;

    const newObj = {
      title: e.target.value,
      id: idGen,
      completed: false,
    };

    setTask((prevTask) => [...prevTask, newObj]);

    setInput("");

    /*

    formas menos eficientes.

     const copyOfState = [...task];

     copyOfState.push(newObj)

     setTask(copyOfState)
    --------------------------


     const stateCopy = [...task, newObj];

     setTask(stateCopy);

     console.log(task);
    */
  };

  return (
    <div className=" bg-black flex justify-center items-center h-full min-h-screen ">
      <div className="container flex flex-col justify-center items-center">
        <Title />
        <Input addUserTask={addUserTask} />
        <TasksContainer task={task} />
      </div>
    </div>
  );
}

export default App;
