import { Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import "./App.css";
import Header from "./components/Header";
import Films from "./components/Films";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/films" element={<Films />} />
      </Routes>
    </>
  );
}

export default App;
