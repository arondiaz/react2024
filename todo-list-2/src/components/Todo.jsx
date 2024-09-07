import React from "react";

const Todo = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-500 border-b border-solid border-gray-600">
      <div className="flex items-center">
        <span className="border border-gray-700 border-solid p-3 rounded-full cursor-pointer"></span>
        <p className="pl-3">Todo item</p>
      </div>
      <img
        src="/close-icon.svg"
        alt="close icon"
        className="cursor-pointer h-5 w-5 transition-all duration-300 ease-in"
      />
    </div>
  );
};

export default Todo;
