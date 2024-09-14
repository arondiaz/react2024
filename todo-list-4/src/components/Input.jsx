import { useState } from "react";

/* eslint-disable react/prop-types */
const Input = ({ addUserTask }) => {
  const [input, setInput] = useState("");

  const handlerInput = (e) => {
    if (e.code !== "Enter") {
      return;
    }
    addUserTask(e, setInput);
  };

  return (
    <>
      <input
        className="pl-4 p-2 rounded-xl my-2"
        type="text"
        placeholder="insert the task..."
        value={input}
        onKeyDown={(e) => handlerInput(e)}
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  );
};

export default Input;
