/* eslint-disable react/prop-types */
const Task = ({ todo, handleDeleteTask, handleSetComplete }) => {
  const { id, title, completed } = todo;
  return (
    <div className="flex items-center justify-between max-w-xl text-white mt-2 ">
      <div className="flex items-center">
        {completed ? (
          <span 
          onClick={() => handleSetComplete(id)}
          className="mx-4 border border-gray-800 rounded-full bg-green-500 p-2 m-2 cursor-pointer"></span>
        ) : (
          <span 
          onClick={() => handleSetComplete(id)}
          className="mx-4 border border-gray-800 rounded-full bg-gray-500 p-2 m-2 cursor-pointer"></span>
        )}

        <p className="mx-4">{title}</p>
      </div>

      <p className="mx-4 cursor-pointer hover:bg-blue-600 rounded-xl p-2 " onClick={()=>handleDeleteTask(id)}>X</p>
    </div>
  );
};

export default Task;
