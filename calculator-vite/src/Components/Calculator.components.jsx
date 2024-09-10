/* eslint-disable react/prop-types */
const Input = ({ clickUser }) => {
  return (
    <input
      value={clickUser}
      className="rounded-lg p-1 py-2 text-black text-xl font-bold"
      type="text"
      readOnly
    />
  );
};

export { Input };
