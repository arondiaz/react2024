import React from "react";

const Todo = ({ todo, handleSetComplete, handleSetDelete }) => {
  const { id, title, completed } = todo;

  return (
    <div className="flex items-center justify-between p-4 bg-gray-500 border-b border-solid border-gray-600">
      <div className="flex items-center">
        {completed ? (
          <div
            onClick={() => handleSetComplete(id)}
            className="bg-green-700 border border-gray-700 border-solid p-3 mr-4 rounded-full cursor-pointer"
          >
            {/* <img
              src="/check-icon.svg"
              alt=""
              className="cursor-pointer h-3 w-3 transition-all duration-300 ease-in"
            /> */}
          </div>
        ) : (
          <span
            onClick={() => handleSetComplete(id)}
            className="border border-gray-700 border-solid p-3 mr-4 rounded-full cursor-pointer"
          ></span>
        )}

        <p className={`pl-3" + ${completed && "line-through"}`}>{title}</p>
      </div>
      <img
        src="/close-icon.svg"
        alt="close icon"
        className="cursor-pointer h-5 w-5 transition-all duration-300 ease-in"
        onClick={() => handleSetDelete(id)}
      />
    </div>
  );
};

export default Todo;
