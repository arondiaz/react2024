/* eslint-disable react/prop-types */
import { CounterTask, ContainerFilter, TypeFilter } from "./FilterItems";

const FilterContainer = ({ todo, filterSelected }) => {

  return (
    <div className="flex flex-row justify-between mt-4">
      <div className="flex justify-between items-center">
        <CounterTask todo={todo.length} />
      </div>
      <ContainerFilter>
        <TypeFilter action={() => filterSelected("All")} filter={"All"} />
        <TypeFilter action={() => filterSelected("In progress")} filter={"In progress"} />
        <TypeFilter action={() => filterSelected("Completed")}  filter={"Completed"} />
      </ContainerFilter>
      <button className="mx-4 text-gray-300">clear</button>
    </div>
  );
};

export default FilterContainer;
