/* eslint-disable react/prop-types */
import OneTask from "./OneTask";

const TasksContainer = ({ task }) => {
  console.log(task);
  return (
    <div className="bg-slate-500">
      {task.length >= 1 ? (
        task.map((oneTask) => <OneTask key={oneTask.id} oneTask={oneTask} />)
      ) : (
        <h1>Agrega tareas</h1>
      )}
    </div>
  );
};

export default TasksContainer;
