/* eslint-disable react/prop-types */
const OneTask = ({ oneTask, deleteClickedTask, markAsCompleted }) => {
  const { id, title, completed } = oneTask;
  return (
    <div className="flex justify-between items-center max-w-sm">
      <div className="flex items-center my-2 ">
        {completed ? (
          <span
            onClick={() => markAsCompleted(id)}
            className="bg-green-500 rounded-full p-3 mx-3 border border-black cursor-pointer"
          ></span>
        ) : (
          <span
            onClick={() => markAsCompleted(id)}
            className="bg-red-500 rounded-full p-3 mx-3 border border-black cursor-pointer"
          ></span>
        )}

        <p className="text-white text-xl mx-2">{title}</p>
      </div>
      <button onClick={() => deleteClickedTask(id)}>X</button>
    </div>
  );
};

export default OneTask;
