import {
  FiltersContainer,
  ItemsLeft,
  FilterButtonContainer,
  FilterButton,
} from "./Filters.component";

const Filters = ({total, activeFilter, showAllTodos, showActiveTodos, showCompletedTodos, handleClearCompleted}) => {

  return (
    <FiltersContainer>
      <ItemsLeft total={total}/>
      <FilterButtonContainer>
        <FilterButton action={() => showAllTodos()} active={activeFilter} filter={"all"} />
        <FilterButton action={() => showActiveTodos()} active={activeFilter} filter={"active"} />
        <FilterButton action={() => showCompletedTodos()} active={activeFilter}  filter={"completed"} />
      </FilterButtonContainer>

      <button onClick={()=> handleClearCompleted()} className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in-out">
        Clear All
      </button>
    </FiltersContainer>
  );
};

export { Filters };
