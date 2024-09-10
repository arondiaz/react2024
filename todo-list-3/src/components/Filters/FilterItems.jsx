/* eslint-disable react/prop-types */
const CounterTask = ({ todo }) => {
  return <p className="text-gray-400 mx-4">Task {todo}</p>;
};

const ContainerFilter = ({ children }) => {
  return <div className="flex flex-row space-x-4 mx-8">{children}</div>;
};

const TypeFilter = ({ action, filter }) => {
 
  return (
    <button onClick={action} className="text-white">
      {filter}
    </button>
  );
};

export { CounterTask, ContainerFilter, TypeFilter };
