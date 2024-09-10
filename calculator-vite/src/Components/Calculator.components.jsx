/* eslint-disable react/prop-types */
const Input = ({clickUser}) => {

    
  return (
    <input value={clickUser} className="rounded-lg p-1 text-black text-lg" type="text" readOnly />
  );
};

export { Input };
