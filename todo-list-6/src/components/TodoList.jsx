/* eslint-disable react/prop-types */
import { CircleCheck, Circle, Trash2 } from "lucide-react";

const TodoList = ({ todos, deleteTodo, handleIsComplete }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full max-w-md space-y-4">
      {todos.map((oneTodo) => (
        <div
          className="flex justify-between items-center bg-gray-100 w-full px-4 py-2 rounded-lg shadow-md"
          key={oneTodo.id}
        >
          <div
            className="flex  items-center cursor-pointer"
            onClick={() => handleIsComplete(oneTodo.id)}
          >
            {oneTodo.isCompleted ? (
              <CircleCheck className="cursor-pointer" />
            ) : (
              <Circle className="text-gray-400 hover:text-gray-500 transition-colors duration-200 cursor-pointer" />
            )}
            <h1 className="mx-4">{oneTodo.title}</h1>
          </div>

          <Trash2
            className="cursor-pointer"
            onClick={() => deleteTodo(oneTodo.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
