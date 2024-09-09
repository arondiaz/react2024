/* eslint-disable react/prop-types */
import Task from "./Task";

const ContainerTasks = ({todo}) => {
  return (
    <div className="bg-blue-900 rounded-xl flex flex-col max-w-3xl mt-4">
      {todo.map((todo) => (
        <Task todo={todo} key={todo.id}/>
      ))}
    </div>
  );
};

export default ContainerTasks;