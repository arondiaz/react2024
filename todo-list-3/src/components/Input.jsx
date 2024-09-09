const Input = () => {
  return (
    <div className="relative mt-2">
      <div className="absolute pl-3 flex items-center pointer-events-none flex-col justify-center">
        <label className=""></label>
      </div>

      <input
        type="text"
        className="p-2 border border-gray-300 rounded"
        placeholder="insert new task..."
      />
    </div>
  );
};

export default Input;
