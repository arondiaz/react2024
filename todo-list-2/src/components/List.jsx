import { Filters } from "./TodoFilters/Filters";

const List = ({ children }) => {
  return (
    <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-xl">
      {children}
      <Filters />
    </div>
  );
};

export default List;
