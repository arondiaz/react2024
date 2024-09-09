import "./App.css";
import Title from "./components/Title";
import Input from "./components/Input";
import ContainerTasks from "./components/ContainerTasks";
import { tasksDB } from "../../todo-list-2/src/db.js/tasksDB";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState(tasksDB);


  return (
    <div className="bg-blue-950 min-h-screen h-full flex justify-center items-center">
      <div className="container flex flex-col justify-center items-center">
        <Title />
        <Input />
        <ContainerTasks todo={todo} />
      </div>
    </div>
  );
}

export default App;
