const BottomTaskContainer = () => {
  return (
    <div className="flex justify-between flex-row">
      <p className="mx-4">Total</p>

      <div className="space-x-3 flex">
        <p>All</p>
        <p>In progress</p>
        <p>Completed</p>
      </div> 

      <button className="ml-6">Clear completed</button>
    </div>
  );
};

export default BottomTaskContainer;
