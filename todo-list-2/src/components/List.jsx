import Todo from "./Todo";
import { Filters } from "./TodoFilters/Filters";

const List = ({
  todos,
  handleSetComplete,
  handleSetDelete,
  activeFilter,
  showActiveTodos,
  showAllTodos,
  showCompletedTodos,
  handleClearCompleted
}) => {
  return (
    <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-xl">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleSetComplete={handleSetComplete}
          handleSetDelete={handleSetDelete}
        />
      ))}
      <Filters
        total={todos.length}
        activeFilter={activeFilter}
        showAllTodos={showAllTodos}
        showActiveTodos={showActiveTodos}
        showCompletedTodos={showCompletedTodos}
        handleClearCompleted={handleClearCompleted}
      />
    </div>
  );
};

export default List;
