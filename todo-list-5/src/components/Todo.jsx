import todo_icon from "../assets/todo_icon.png";

const Todo = () => {
  return (
    <div className="bg-slate-400 place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-md ">
      <div className="flex items-center mt-7 gap-2">
        <img className="w-8" src={todo_icon} alt="" />
        <h1 className="text-3xl font-semibold"> ToDo List </h1>
      </div>

      <div className="flex items-center my-7 bg-gray-500 rounded-full">
        <input
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-700"
          type="text"
          placeholder="add your task"
        />
        <button className="border-none rounded-full bg-orange-600 w-32 h-14 text-white texl-lg font-medium cursor-pointer">ADD +</button>
      </div>


      <div>
        
      </div>
    </div>
  );
};

export default Todo;
