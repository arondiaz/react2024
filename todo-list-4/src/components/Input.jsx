/* eslint-disable react/prop-types */
const Input = ({ addUserTask }) => {
  return (
    <>
      <input
        className="pl-4 p-2 rounded-xl my-2"
        type="text"
        placeholder="insert the task..."
        onKeyDown={(e) => addUserTask(e)}
      />
    </>
  );
};

export default Input;
