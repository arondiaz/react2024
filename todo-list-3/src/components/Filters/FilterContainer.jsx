import { CounterTask, ContainerFilter, TypeFilter } from "./FilterItems";

const FilterContainer = () => {
  return (
    <div className="flex flex-row justify-between mt-4">
      <div className="flex justify-between items-center">
        <CounterTask />
      </div>
      <ContainerFilter>
        <TypeFilter filter={"All"} />
        <TypeFilter filter={"In progress"} />
        <TypeFilter filter={"Completed"} />
      </ContainerFilter>
      <button className="mx-4 text-gray-300">clear</button>
    </div>
  );
};

export default FilterContainer;
