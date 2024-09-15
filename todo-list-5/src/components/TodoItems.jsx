import tick from "../assets/tick.png";
import delete_icon from "../assets/delete.png";
import not_tick from "../assets/not_tick.png";

const TodoItems = ({ oneTask }) => {
  const { id, title, completed } = oneTask;
  return (
    <div className="flex items-center my-3 gap-2">
      <div className="flex flex-1 items-center cursor-pointer">
        {completed ? (
          <img src={tick} alt="" className="w-7" />
        ) : (
          <img src={not_tick} alt="" className="w-7" />
        )}

        <p className="text-gray-700 ml-4 text-lg">{title}</p>
      </div>

      <img src={delete_icon} alt="" className="w-3.5 cursor-pointer" />
    </div>
  );
};

export default TodoItems;
