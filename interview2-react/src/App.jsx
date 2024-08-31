import { Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import "./App.css";
import Header from "./components/Header";
import Films from "./components/Films";
import Favourites from "./components/Favourites";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/films" element={<Films />} />
        <Route path="/favorites" element={<Favourites />} />
      </Routes>
    </>
  );
}

export default App;
