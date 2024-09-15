import { useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";

const Todo = () => {
  const [todo, setTodo] = useState([]);

  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return;
    }

    const newTodo = {
      id: Date.now(),
      title: inputText,
      complete: false,
    };

    setTodo((prev) => [...prev, newTodo]);

    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodo((prev) => {
     return prev.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div className="bg-slate-400 place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-md ">
      <div className="flex items-center mt-7 gap-2">
        <img className="w-8" src={todo_icon} alt="" />
        <h1 className="text-3xl font-semibold"> ToDo List </h1>
      </div>

      <div className="flex items-center my-7 bg-gray-500 rounded-full">
        <input
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-700"
          type="text"
          placeholder="add your task"
          ref={inputRef}
        />
        <button
          className="border-none rounded-full bg-orange-600 w-32 h-14 text-white texl-lg font-medium cursor-pointer"
          onClick={() => add()}
        >
          ADD +
        </button>
      </div>

      <div>
        {todo.map((oneTask) => {
          return <TodoItems key={oneTask.id} oneTask={oneTask} deleteTodo={deleteTodo}/>;
        })}
      </div>
    </div>
  );
};

export default Todo;
