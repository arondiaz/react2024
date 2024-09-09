import { useState } from "react";

/* eslint-disable react/prop-types */
const Input = ({ addInputUserTask }) => {
  const [userInput, setUserInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.code === "Enter") {
      addInputUserTask(userInput);
    }
  };
  return (
    <div className="relative mt-2">
      <div className="absolute pl-3 flex items-center pointer-events-none flex-col justify-center">
        <label className=""></label>
      </div>

      <input
        type="text"
        className="p-2 border border-gray-300 rounded"
        placeholder="insert new task..."
        onKeyDown={(e) => handleKeyDown(e)}
        onChange={(e) => setUserInput(e.target.value)}
      />
    </div>
  );
};

export default Input;
