/* eslint-disable react/prop-types */
import tick from "../assets/tick.png";
import delete_icon from "../assets/delete.png";
import not_tick from "../assets/not_tick.png";

const TodoItems = ({ oneTask, deleteTodo, toggle }) => {
  const { id, title, complete } = oneTask;

  // console.log(`Task: ${title}, complete: ${complete}`);
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        className="flex flex-1 items-center cursor-pointer"
        onClick={() => toggle(id)}
      >
        <img src={complete ? tick : not_tick} alt="" className="w-7" />

        <p
          className={`text-gray-600 mx-4 text-lg ${
            complete ? "line-through" : ""
          }`}
        >
          {title}
        </p>
      </div>

      <img
        src={delete_icon}
        alt=""
        className="w-3.5 cursor-pointer"
        onClick={() => deleteTodo(id)}
      />
    </div>
  );
};

export default TodoItems;
