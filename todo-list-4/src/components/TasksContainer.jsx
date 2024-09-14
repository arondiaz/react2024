/* eslint-disable react/prop-types */
import OneTask from "./OneTask";

const TasksContainer = ({ task, deleteClickedTask, markAsCompleted }) => {
  return (
    <div className="bg-slate-500 max-w-3xl min-w-[320px] rounded-xl p-6 shadow-xl">
      {task.length >= 1 ? (
        task.map((oneTask) => <OneTask key={oneTask.id} oneTask={oneTask}  deleteClickedTask={deleteClickedTask} markAsCompleted={markAsCompleted}/>)
      ) : (
        <div className="flex h-full justify-center items-center flex-col">
          <h1 className="text-2xl text-zinc-300 font-bold ">Add tasks...</h1>
        </div>
      )}
    </div>
  );
};

export default TasksContainer;
