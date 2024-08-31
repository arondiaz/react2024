import { Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import "./App.css";
import Header from "./components/Header";
import Films from "./components/Films";
import Favourites from "./components/Favourites";
import Detail from "./components/Detail";

function App() {
  const addOrRemoveFromFavs = (e) => {
    const btnParent = e.target.parentElement;
    const img = btnParent.querySelector("img").getAttribute("src");
    const title = btnParent.querySelector("h3").innerHTML;

    const objFav = {
      img,
      title,
      id: e.target.dataset.movieId,
    };

    console.log(objFav);
  };

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route
          path="/films"
          element={<Films addOrRemoveFromFavs={addOrRemoveFromFavs} />}
        />
        <Route path="/detail" element={<Detail />} />
        <Route path="/favorites" element={<Favourites />} />
      </Routes>
    </>
  );
}

export default App;
