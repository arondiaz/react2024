import "./App.css";
import ContainerCalculator from "./Components/ContainerCalculator";
import Title from "./Components/Title";
import Calculator from "./Components/Calculator";
import { useState } from "react";

function App() {
  const numbersAndOperators = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    "+",
    "-",
    "*",
    "/",
  ];

  const equal = ["="];

  const [clickUser, setClickUser] = useState("");

  const handleUserValue = (input) => {
    setClickUser((prev) => prev + input);
  };

  const handleResolve = () => {
    if (clickUser === "") {
      return;
    }
    const resolved = eval(clickUser);

    setClickUser(resolved);
  };

  const handleClean = () => {
    setClickUser("");
  };

  return (
    <div className="min-h-screen w-full bg-slate-800 flex justify-center items-center flex-col">
      <Title />

      <ContainerCalculator>
        <Calculator
          numbersAndOperators={numbersAndOperators}
          handleUserValue={handleUserValue}
          clickUser={clickUser}
          equal={equal}
          handleResolve={handleResolve}
          handleClean={handleClean}
        />
      </ContainerCalculator>
    </div>
  );
}

export default App;
