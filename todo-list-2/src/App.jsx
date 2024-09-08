import Title from "./components/Title";
import Input from "./components/Input";
import List from "./components/List";
import Todo from "./components/Todo";
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

  return (
    <div className="bg-gray-800 font-inter min-h-screen h-full text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Title />

        <Input />
        <List todos={todos}/>

      </div>
    </div>
  );
}

export default App;
