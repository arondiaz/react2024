/* eslint-disable react/prop-types */
const CounterTask = () => {
  return <p className="text-gray-400 mx-4">Task 0</p>;
};

const ContainerFilter = ({ children }) => {
  return <div className="flex flex-row space-x-4 mx-8">{children}</div>;
};

const TypeFilter = ({ filter }) => {
  return <button className="text-white"> {filter}</button>;
};

export { CounterTask, ContainerFilter, TypeFilter };
