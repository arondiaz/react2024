import {
  FiltersContainer,
  ItemsLeft,
  FilterButtonContainer,
  FilterButton,
} from "./Filters.component";

const Filters = () => {
  return (
    <FiltersContainer>
      <ItemsLeft />
      <FilterButtonContainer>
        <FilterButton action={() => {}} active="All" filter={"All"} />
        <FilterButton action={() => {}} active="All" filter={"In progress"} />
        <FilterButton action={() => {}} active="All" filter={"Finished"} />
      </FilterButtonContainer>

      <button className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in-out">
        Clear All
      </button>
    </FiltersContainer>
  );
};

export { Filters };
