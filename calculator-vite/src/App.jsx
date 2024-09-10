import "./App.css";
import ContainerCalculator from "./Components/ContainerCalculator";
import Title from "./Components/Title";
import Calculator from "./Components/Calculator";
import { useState } from "react";

function App() {
  const [value, setValues] = useState([
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
    "=",
  ]);

  const [clickUser, setClickUser] = useState("");

  const handleUserValue = (input) => {
    setClickUser((prev) => prev + input);
  };

  return (
    <div className="min-h-screen w-full bg-slate-800 flex justify-center items-center flex-col">
      <Title />

      <ContainerCalculator>
        <Calculator
          value={value}
          handleUserValue={handleUserValue}
          clickUser={clickUser}
        />
      </ContainerCalculator>
    </div>
  );
}

export default App;
