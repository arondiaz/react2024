/* eslint-disable react/prop-types */
const OneTask = ({ oneTask }) => {
  const { id, title, completed } = oneTask;
  return (
    <div className="">
      <p className="text-white text-3xl">{title}</p>
    </div>
  );
};

export default OneTask;
