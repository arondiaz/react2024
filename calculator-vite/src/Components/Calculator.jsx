/* eslint-disable react/prop-types */
import { Input } from "./Calculator.components";

const Calculator = ({
  numbersAndOperators,
  handleUserValue,
  clickUser,
  equal,
  handleResolve,
  handleClean,
}) => {
  return (
    <div className="flex justify-center flex-col bg-slate-700 pt-8 px-10 rounded-xl">
      <Input clickUser={clickUser} />

      <div className="mt-2">
        {numbersAndOperators.map((oneValue) => (
          <button
            onClick={() => handleUserValue(oneValue)}
            className="bg-orange-700 p-4 border-none rounded-lg m-2 text-white font-bold text-lg cursor-pointer hover:shadow-slate-700 shadow-lg"
            key={oneValue}
          >
            {oneValue}
          </button>
        ))}

        {equal.map((theEqual) => (
          <button
            onClick={() => handleResolve(theEqual)}
            className="bg-red-700 p-3 border-none rounded-lg m-2 px-11 text-white font-bold text-2xl cursor-pointer hover:shadow-slate-700 shadow-lg"
            key={theEqual}
          >
            {theEqual}
          </button>
        ))}

        <button
          onClick={() => handleClean()}
          className="bg-yellow-700 p-4 px-12 border-none rounded-lg m-2 text-white font-bold text-2xl cursor-pointer hover:shadow-slate-700 shadow-lg mb-6"
        >
          C
        </button>
      </div>
    </div>
  );
};

export default Calculator;
