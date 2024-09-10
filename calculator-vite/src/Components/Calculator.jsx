/* eslint-disable react/prop-types */
import { Input } from "./Calculator.components";

const Calculator = ({ value, handleUserValue, clickUser }) => {
  return (
    <div className="flex justify-center flex-col">
      <Input clickUser={clickUser} />

      <div className="mt-2">
        {value.map((oneValue) => (
          <button
            onClick={() => handleUserValue(oneValue)}
            className="bg-orange-700 p-4 border-none rounded-lg m-2 text-white font-bold text-lg cursor-pointer hover:shadow-slate-700 shadow-lg"
            key={oneValue}
          >
            {oneValue}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
