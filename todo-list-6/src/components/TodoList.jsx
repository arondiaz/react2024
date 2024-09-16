/* eslint-disable react/prop-types */
import { CircleCheck, Circle, Trash2 } from "lucide-react";

const TodoList = ({ todos, deleteTodo }) => {

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-md space-y-4">
      {todos.map((oneTodo) => (
        <div
          className="flex justify-between items-center bg-gray-100 w-full px-4 py-2 rounded-lg shadow-md"
          key={oneTodo.id}
        >
          {oneTodo.isCompleted ? (
            <CircleCheck />
          ) : (
            <Circle className="text-gray-400 hover:text-gray-500 transition-colors duration-200" />
          )}
          <h1>{oneTodo.title}</h1>

          <Trash2  onClick={() => deleteTodo(oneTodo.id)}/>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
