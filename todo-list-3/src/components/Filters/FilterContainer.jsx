/* eslint-disable react/prop-types */
import { CounterTask, ContainerFilter, TypeFilter } from "./FilterItems";

const FilterContainer = ({ todo, setFilterUser, filterUser, clearCompletedTask }) => {

  return (
    <div className="flex flex-row justify-between mt-4">
      <div className="flex justify-between items-center">
        <CounterTask todo={todo.length} />
      </div>
      <ContainerFilter>
        <TypeFilter action={() => setFilterUser("All")} active={filterUser} filter={"All"} />
        <TypeFilter action={() => setFilterUser("In progress")} active={filterUser} filter={"In progress"} />
        <TypeFilter action={() => setFilterUser("Completed")} active={filterUser} filter={"Completed"} />
      </ContainerFilter>
      <button  onClick={()=> clearCompletedTask()} className="mx-4 text-gray-300">clear</button>
    </div>
  );
};

export default FilterContainer;
