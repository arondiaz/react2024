import { Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import "./App.css";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
    </>
  );
}

export default App;
