/* eslint-disable react/prop-types */
import FilterContainer from "./Filters/FilterContainer";
import Task from "./Task";

const ContainerTasks = ({
  todo,
  handleDeleteTask,
  setFilterUser,
  handleSetComplete,
  filterUser,
  showOnlyFilteredTask,
}) => {
  return (
    <div className="bg-blue-900 rounded-xl flex flex-col max-w-3xl mt-4">
      {todo &&
        showOnlyFilteredTask.map((todo) => (
          <Task
            todo={todo}
            key={todo.id}
            handleDeleteTask={handleDeleteTask}
            handleSetComplete={handleSetComplete}
            showOnlyFilteredTask={showOnlyFilteredTask}
          />
        ))}

      <FilterContainer
        todo={todo}
        setFilterUser={setFilterUser}
        filterUser={filterUser}
      />
    </div>
  );
};

export default ContainerTasks;
