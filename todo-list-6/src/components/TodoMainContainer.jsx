/* eslint-disable react/prop-types */
import { useRef } from "react";

const TodoMainContainer = ({addTodo}) => {
  const inputRef = useRef();

  return (
    <div className="flex max-w-lg px-4 py-4 items-center">
      <input
        ref={inputRef}
        type="text"
        className="my-4 rounded-xl pl-4 py-2 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-lime-500 transition"
        placeholder="Insert task..."
      />
      <button className="bg-lime-700 text-white rounded-xl ml-4 px-6 py-2 hover:bg-lime-600 transition" onClick={() => addTodo(inputRef)}>
        Add
      </button>
    </div>
  );
};

export default TodoMainContainer;
