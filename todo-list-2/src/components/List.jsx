import Todo from "./Todo";
import { Filters } from "./TodoFilters/Filters";

const List = ({ todos }) => {
  return (
    <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-xl">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
      <Filters />
    </div>
  );
};

export default List;
